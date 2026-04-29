"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/components/providers/i18n-provider";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ChefHat, LayoutDashboard, Plus, Minus, Check, Clock, X, Flame } from "lucide-react";

type OrderItem = {
  id: string;
  quantity: number;
  price: number;
};

type OrderStatus = "new" | "preparing" | "completed";

type Order = {
  id: string;
  table: number;
  items: OrderItem[];
  note: string;
  total: number;
  status: OrderStatus;
  createdAt: number;
  preparedAt?: number;
  completedAt?: number;
};

const menuData = {
  starters: [
    { id: "mercimek", price: 65 },
    { id: "ezme", price: 55 },
    { id: "humus", price: 60 },
    { id: "sigara_boregi", price: 75 },
    { id: "patlican_salatasi", price: 65 },
    { id: "atom", price: 50 },
  ],
  mains: [
    { id: "adana", price: 195 },
    { id: "urfa", price: 195 },
    { id: "beyti", price: 225 },
    { id: "kuzu_pirzola", price: 345 },
    { id: "tavuk_kanat", price: 165 },
    { id: "iskender", price: 215 },
    { id: "karisik_izgara", price: 495 },
    { id: "kofte", price: 175 },
  ],
  sides: [
    { id: "pilav", price: 45 },
    { id: "lavas", price: 25 },
    { id: "kozlenmis_biber", price: 35 },
    { id: "piyaz", price: 50 },
    { id: "coban_salata", price: 55 },
    { id: "mevsim_salata", price: 65 },
  ],
  drinks: [
    { id: "ayran", price: 30 },
    { id: "salgam", price: 30 },
    { id: "kola", price: 45 },
    { id: "su", price: 15 },
    { id: "cay", price: 20 },
    { id: "kahve", price: 45 },
    { id: "limonata", price: 55 },
  ],
  desserts: [
    { id: "kunefe", price: 120 },
    { id: "katmer", price: 110 },
    { id: "sutlac", price: 75 },
    { id: "baklava", price: 95 },
  ]
};

export function RestaurantClient() {
  const { dict } = useI18n();
  const dr = dict.demo_restaurant;

  const [activeTab, setActiveTab] = useState<"menu" | "mutfak" | "yonetim">("menu");
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Read hash
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "mutfak" || hash === "yonetim") {
        setActiveTab(hash);
      } else {
        setActiveTab("menu");
      }
    };
    
    handleHash();
    window.addEventListener("hashchange", handleHash);

    // Sync orders from localStorage
    const loadOrders = () => {
      const saved = localStorage.getItem("restaurant_orders");
      if (saved) {
        setOrders(JSON.parse(saved));
      }
    };

    loadOrders();
    window.addEventListener("storage", loadOrders);

    // Initial setup if empty
    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("storage", loadOrders);
    };
  }, []);

  const saveOrders = (newOrders: Order[]) => {
    setOrders(newOrders);
    localStorage.setItem("restaurant_orders", JSON.stringify(newOrders));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-[family-name:var(--font-sora)] pb-24 selection:bg-[#00f3ff] selection:text-black">
      
      {/* Dev Navigation (Demo Purposes) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl px-2 py-2 rounded-full border border-white/10 z-[100] flex gap-2 shadow-2xl">
        <a href="#menu" className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === 'menu' ? 'bg-[#f59e0b] text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'text-white/50 hover:bg-white/10'}`}>
          <ShoppingCart size={16} /> <span className="hidden sm:inline">Müşteri</span>
        </a>
        <a href="#mutfak" className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === 'mutfak' ? 'bg-[#ef4444] text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'text-white/50 hover:bg-white/10'}`}>
          <ChefHat size={16} /> <span className="hidden sm:inline">Mutfak</span>
        </a>
        <a href="#yonetim" className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === 'yonetim' ? 'bg-[#3b82f6] text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'text-white/50 hover:bg-white/10'}`}>
          <LayoutDashboard size={16} /> <span className="hidden sm:inline">Yönetim</span>
        </a>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "menu" && <CustomerMenu key="menu" dict={dr} onOrder={(order) => saveOrders([...orders, order])} />}
        {activeTab === "mutfak" && <KitchenScreen key="mutfak" dict={dr} orders={orders} updateOrder={(id, status) => {
            const up = orders.map(o => o.id === id ? { ...o, status, ...(status === 'preparing' ? { preparedAt: Date.now() } : { completedAt: Date.now() }) } : o);
            saveOrders(up);
        }} />}
        {activeTab === "yonetim" && <AdminDashboard key="yonetim" dict={dr} orders={orders} />}
      </AnimatePresence>

    </div>
  );
}

function CustomerMenu({ dict, onOrder }: { dict: any, onOrder: (o: Order) => void }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [table, setTable] = useState<number>(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      const q = (prev[id] || 0) + delta;
      if (q <= 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: q };
    });
  };

  const cartTotal = Object.entries(cart).reduce((acc, [id, qty]) => {
    const itemPrice = Object.values(menuData).flat().find(i => i.id === id)?.price || 0;
    return acc + (itemPrice * qty);
  }, 0);

  const cartCount = Object.values(cart).reduce((acc, q) => acc + q, 0);

  const placeOrder = () => {
    if (cartCount === 0) return;
    const items = Object.entries(cart).map(([id, quantity]) => {
      const price = Object.values(menuData).flat().find(i => i.id === id)?.price || 0;
      return { id, quantity, price };
    });
    
    onOrder({
      id: Math.random().toString(36).substr(2, 6).toUpperCase(),
      table,
      items,
      note,
      total: cartTotal,
      status: "new",
      createdAt: Date.now()
    });

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setCart({});
      setIsCartOpen(false);
      setNote("");
    }, 2000);
  };

  const categories = [
    { id: "starters", label: dict.menu.categories.starters },
    { id: "mains", label: dict.menu.categories.mains },
    { id: "sides", label: dict.menu.categories.sides },
    { id: "drinks", label: dict.menu.categories.drinks },
    { id: "desserts", label: dict.menu.categories.desserts },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-12">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="text-[#f59e0b]" />
            <span className="font-bold text-xl tracking-tight">Ateş Kebap</span>
          </div>
          <div className="flex items-center gap-4">
            <select 
              value={table} 
              onChange={(e) => setTable(Number(e.target.value))}
              className="bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-[#f59e0b]"
            >
              {Array.from({length: 20}).map((_, i) => (
                <option key={i} value={i+1} className="bg-[#141414]">Masa {i+1}</option>
              ))}
            </select>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f59e0b] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Nav */}
        <div className="max-w-2xl mx-auto mt-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max pb-2">
            {categories.map(c => (
              <a 
                key={c.id} 
                href={`#cat-${c.id}`}
                className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6 space-y-12">
        {categories.map(c => (
          <section key={c.id} id={`cat-${c.id}`} className="scroll-mt-36">
            <h2 className="text-xl font-bold mb-4 text-[#f59e0b]">{c.label}</h2>
            <div className="grid grid-cols-1 gap-4">
              {menuData[c.id as keyof typeof menuData].map(item => {
                const qty = cart[item.id] || 0;
                const info = dict.menu.items[item.id];
                return (
                  <div key={item.id} className={`p-4 rounded-2xl border transition-all duration-300 ${qty > 0 ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-white/5 bg-[#141414] hover:border-white/10'}`}>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-lg">{info?.name || item.id}</h3>
                        <p className="text-white/50 text-sm mt-1 mb-3">{info?.desc}</p>
                        <span className="font-bold text-[#f59e0b]">{dict.common.currency}{item.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-white/5 rounded-full p-1 border border-white/5 shrink-0">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${qty > 0 ? 'bg-white/10 hover:bg-white/20 text-white' : 'text-white/20 cursor-not-allowed'}`}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-bold w-4 text-center">{qty}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-[#f59e0b]/20 hover:bg-[#f59e0b]/30 text-[#f59e0b] flex items-center justify-center transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-[#141414] border-l border-white/10 z-50 flex flex-col shadow-2xl"
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
                <h2 className="text-xl font-bold">{dict.menu.cart}</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartCount === 0 ? (
                  <p className="text-center text-white/40 mt-10">{dict.menu.empty_cart}</p>
                ) : (
                  Object.entries(cart).map(([id, qty]) => {
                    const price = Object.values(menuData).flat().find(i => i.id === id)?.price || 0;
                    const info = dict.menu.items[id];
                    return (
                      <div key={id} className="flex justify-between items-center gap-2">
                        <div>
                          <div className="font-semibold">{info?.name || id}</div>
                          <div className="text-sm text-[#f59e0b]">{dict.common.currency}{price} x {qty}</div>
                        </div>
                        <div className="font-bold">{dict.common.currency}{price * qty}</div>
                      </div>
                    );
                  })
                )}

                {cartCount > 0 && (
                  <textarea 
                    placeholder={dict.menu.order_note}
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    className="w-full mt-4 bg-white/5 border border-white/10 rounded-xl p-3 text-sm outline-none focus:border-[#f59e0b] min-h-[80px]"
                  />
                )}
              </div>

              <div className="p-4 border-t border-white/10 bg-[#0a0a0a]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/60">{dict.menu.total}:</span>
                  <span className="text-2xl font-bold text-[#f59e0b]">{dict.common.currency}{cartTotal}</span>
                </div>
                <button 
                  onClick={placeOrder}
                  disabled={cartCount === 0 || success}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center transition-all ${
                    success ? 'bg-green-500 text-white' : 
                    cartCount > 0 ? 'bg-[#f59e0b] text-black hover:brightness-110' : 'bg-white/10 text-white/40'
                  }`}
                >
                  {success ? (
                    <><Check className="mr-2" /> {dict.menu.success_msg}</>
                  ) : dict.menu.place_order}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

function KitchenScreen({ dict, orders, updateOrder }: { dict: any, orders: Order[], updateOrder: (id: string, s: OrderStatus) => void }) {
  const newOrders = orders.filter(o => o.status === "new");
  const prepOrders = orders.filter(o => o.status === "preparing");
  const doneOrders = orders.filter(o => o.status === "completed").sort((a,b) => (b.completedAt||0) - (a.completedAt||0)).slice(0, 10);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4 md:p-8 max-w-7xl mx-auto h-screen flex flex-col">
      <header className="mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#ef4444]/20 flex items-center justify-center text-[#ef4444]">
          <ChefHat size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{dict.kitchen.title}</h1>
          <p className="text-white/50 text-sm">Canlı sipariş akışı</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        
        {/* Sütun 1: Yeni Siparişler */}
        <div className="flex flex-col bg-white/5 rounded-2xl border border-[#ef4444]/30 overflow-hidden">
          <div className="bg-[#ef4444]/10 p-4 border-b border-[#ef4444]/20 flex justify-between items-center">
            <h2 className="font-bold text-[#ef4444]">{dict.kitchen.new_orders}</h2>
            <span className="bg-[#ef4444] text-white text-xs font-bold px-2 py-1 rounded-full">{newOrders.length}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {newOrders.length === 0 ? <p className="text-white/30 text-sm text-center py-4">{dict.kitchen.empty_state}</p> : 
              newOrders.map(o => (
                <div key={o.id} className="bg-[#141414] border border-white/10 p-4 rounded-xl shadow-lg border-l-4 border-l-[#ef4444]">
                  <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/5">
                    <span className="font-bold text-lg">Masa {o.table}</span>
                    <span className="text-xs text-white/40">{Math.floor((Date.now() - o.createdAt)/60000)} {dict.kitchen.mins_ago}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {o.items.map(i => (
                      <li key={i.id} className="flex justify-between text-sm">
                        <span><span className="font-bold text-[#ef4444]">{i.quantity}x</span> {dict.menu.items[i.id]?.name || i.id}</span>
                      </li>
                    ))}
                  </ul>
                  {o.note && <div className="bg-[#ef4444]/10 text-[#ef4444] p-2 rounded text-xs mb-4"><strong>{dict.kitchen.note}:</strong> {o.note}</div>}
                  <button onClick={() => updateOrder(o.id, "preparing")} className="w-full py-2 bg-[#ef4444] text-white font-bold rounded-lg text-sm hover:brightness-110 transition-all">
                    {dict.kitchen.btn_prepare}
                  </button>
                </div>
              ))
            }
          </div>
        </div>

        {/* Sütun 2: Hazırlanıyor */}
        <div className="flex flex-col bg-white/5 rounded-2xl border border-[#f59e0b]/30 overflow-hidden">
          <div className="bg-[#f59e0b]/10 p-4 border-b border-[#f59e0b]/20 flex justify-between items-center">
            <h2 className="font-bold text-[#f59e0b]">{dict.kitchen.preparing}</h2>
            <span className="bg-[#f59e0b] text-black text-xs font-bold px-2 py-1 rounded-full">{prepOrders.length}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {prepOrders.length === 0 ? <p className="text-white/30 text-sm text-center py-4">{dict.kitchen.empty_state}</p> : 
              prepOrders.map(o => (
                <div key={o.id} className="bg-[#141414] border border-white/10 p-4 rounded-xl shadow-lg border-l-4 border-l-[#f59e0b]">
                  <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/5">
                    <span className="font-bold text-lg">Masa {o.table}</span>
                    <span className="text-xs text-[#f59e0b] flex items-center gap-1"><Clock size={12}/> {Math.floor((Date.now() - (o.preparedAt||o.createdAt))/60000)} {dict.kitchen.mins_ago}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {o.items.map(i => (
                      <li key={i.id} className="flex justify-between text-sm text-white/80">
                        <span><span className="font-bold text-[#f59e0b]">{i.quantity}x</span> {dict.menu.items[i.id]?.name || i.id}</span>
                      </li>
                    ))}
                  </ul>
                  {o.note && <div className="bg-[#f59e0b]/10 text-[#f59e0b] p-2 rounded text-xs mb-4"><strong>{dict.kitchen.note}:</strong> {o.note}</div>}
                  <button onClick={() => updateOrder(o.id, "completed")} className="w-full py-2 bg-[#f59e0b] text-black font-bold rounded-lg text-sm hover:brightness-110 transition-all">
                    {dict.kitchen.btn_ready}
                  </button>
                </div>
              ))
            }
          </div>
        </div>

        {/* Sütun 3: Tamamlandı */}
        <div className="flex flex-col bg-white/5 rounded-2xl border border-green-500/30 overflow-hidden">
          <div className="bg-green-500/10 p-4 border-b border-green-500/20 flex justify-between items-center">
            <h2 className="font-bold text-green-500">{dict.kitchen.completed}</h2>
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">{doneOrders.length}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {doneOrders.length === 0 ? <p className="text-white/30 text-sm text-center py-4">{dict.kitchen.empty_state}</p> : 
              doneOrders.map(o => (
                <div key={o.id} className="bg-[#141414] border border-white/10 p-3 rounded-xl opacity-60">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Masa {o.table}</span>
                    <Check className="text-green-500" size={16} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </motion.div>
  );
}

function AdminDashboard({ dict, orders }: { dict: any, orders: Order[] }) {
  const todayRevenue = orders.filter(o => o.status === "completed").reduce((acc, o) => acc + o.total, 0);
  const totalOrders = orders.filter(o => o.status === "completed").length;
  const avgOrder = totalOrders > 0 ? todayRevenue / totalOrders : 0;
  
  // Find top item
  const itemCounts: Record<string, number> = {};
  orders.forEach(o => {
    o.items.forEach(i => { itemCounts[i.id] = (itemCounts[i.id] || 0) + i.quantity; });
  });
  let topItem = "-";
  let maxQty = 0;
  Object.entries(itemCounts).forEach(([id, qty]) => {
    if (qty > maxQty) { maxQty = qty; topItem = dict.menu.items[id]?.name || id; }
  });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4 md:p-8 max-w-7xl mx-auto">
      <header className="mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6]">
          <LayoutDashboard size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{dict.dashboard.title}</h1>
          <p className="text-white/50 text-sm">Gerçek zamanlı metrikler</p>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: dict.dashboard.stats.orders, value: totalOrders, format: "" },
          { label: dict.dashboard.stats.revenue, value: todayRevenue, format: dict.common.currency },
          { label: dict.dashboard.stats.avg_order, value: avgOrder.toFixed(0), format: dict.common.currency },
          { label: dict.dashboard.stats.top_item, value: topItem, format: "" },
        ].map((s, i) => (
          <div key={i} className="bg-[#141414] border border-white/10 rounded-2xl p-6">
            <h3 className="text-white/50 text-xs md:text-sm font-semibold mb-2">{s.label}</h3>
            <p className="text-2xl md:text-3xl font-bold text-[#3b82f6]">{s.format}{s.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-lg font-bold">{dict.dashboard.recent_orders}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-white/50 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">{dict.dashboard.table.id}</th>
                <th className="px-6 py-4">{dict.dashboard.table.table_no}</th>
                <th className="px-6 py-4">{dict.dashboard.table.amount}</th>
                <th className="px-6 py-4">{dict.dashboard.table.status}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {orders.slice().reverse().map(o => (
                <tr key={o.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-[#3b82f6]">#{o.id}</td>
                  <td className="px-6 py-4">Masa {o.table}</td>
                  <td className="px-6 py-4 font-bold">{dict.common.currency}{o.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      o.status === 'new' ? 'bg-[#ef4444]/20 text-[#ef4444]' : 
                      o.status === 'preparing' ? 'bg-[#f59e0b]/20 text-[#f59e0b]' : 
                      'bg-green-500/20 text-green-500'
                    }`}>
                      {o.status === 'new' ? dict.kitchen.new_orders : o.status === 'preparing' ? dict.kitchen.preparing : dict.kitchen.completed}
                    </span>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-white/40">Kayıt bulunamadı.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
