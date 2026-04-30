"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/components/providers/i18n-provider";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, ChefHat, LayoutDashboard, Plus, Minus, Check, Clock, X, Flame, 
  Settings, QrCode, List, Users, Bell, HelpCircle, LogOut, Upload, Copy, Edit,
  UtensilsCrossed, MonitorPlay, TrendingUp, Download, Search, Trash2, Camera
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, Cell, CartesianGrid } from "recharts";

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

type RestaurantConfig = {
  name: string;
  themeColor: string;
};

const DEFAULT_CONFIG: RestaurantConfig = {
  name: "OrderEasy Pro",
  themeColor: "#22c55e"
};

const THEME_COLORS = [
  { id: 'red', value: '#ef4444' },
  { id: 'orange', value: '#f59e0b' },
  { id: 'green', value: '#22c55e' },
  { id: 'blue', value: '#3b82f6' },
  { id: 'purple', value: '#d946ef' },
];

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
  const [config, setConfig] = useState<RestaurantConfig>(DEFAULT_CONFIG);

  useEffect(() => {
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

    const loadData = () => {
      const savedOrders = localStorage.getItem("restaurant_orders");
      if (savedOrders) setOrders(JSON.parse(savedOrders));

      const savedConfig = localStorage.getItem("restaurant_config");
      if (savedConfig) setConfig(JSON.parse(savedConfig));
    };

    loadData();
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("storage", loadData);
    };
  }, []);

  const saveOrders = (newOrders: Order[]) => {
    setOrders(newOrders);
    localStorage.setItem("restaurant_orders", JSON.stringify(newOrders));
    window.dispatchEvent(new Event("storage"));
  };

  const saveConfig = (newConfig: RestaurantConfig) => {
    setConfig(newConfig);
    localStorage.setItem("restaurant_config", JSON.stringify(newConfig));
    window.dispatchEvent(new Event("storage"));
  };

  const addDemoOrder = () => {
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 6).toUpperCase(),
      table: Math.floor(Math.random() * 12) + 1,
      items: [
        { id: "adana", quantity: Math.floor(Math.random() * 3) + 1, price: 195 },
        { id: "ayran", quantity: Math.floor(Math.random() * 3) + 1, price: 30 }
      ],
      note: Math.random() > 0.5 ? "Acılı olsun" : "",
      total: 0, // will be calculated below
      status: "new",
      createdAt: Date.now()
    };
    newOrder.total = newOrder.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    saveOrders([...orders, newOrder]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-[family-name:var(--font-sora)] pb-24 selection:bg-[#00f3ff] selection:text-black">
      
      {/* Dev Navigation (Demo Purposes) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl px-2 py-2 rounded-full border border-white/10 z-[100] flex gap-2 shadow-2xl">
        <a href="#menu" className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === 'menu' ? 'text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'text-white/50 hover:bg-white/10'}`} style={activeTab === 'menu' ? { backgroundColor: config.themeColor } : {}}>
          <ShoppingCart size={16} /> <span className="hidden sm:inline">Müşteri</span>
        </a>
        <a href="#mutfak" className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === 'mutfak' ? 'bg-[#ef4444] text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'text-white/50 hover:bg-white/10'}`}>
          <ChefHat size={16} /> <span className="hidden sm:inline">Mutfak</span>
        </a>
        <a href="#yonetim" className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === 'yonetim' ? 'text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'text-white/50 hover:bg-white/10'}`} style={activeTab === 'yonetim' ? { backgroundColor: config.themeColor } : {}}>
          <LayoutDashboard size={16} /> <span className="hidden sm:inline">Yönetim</span>
        </a>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "menu" && <CustomerMenu key="menu" dict={dr} config={config} onOrder={(order) => saveOrders([...orders, order])} />}
        {activeTab === "mutfak" && <KitchenScreen key="mutfak" dict={dr} orders={orders} updateOrder={(id, status) => {
            const up = orders.map(o => o.id === id ? { ...o, status, ...(status === 'preparing' ? { preparedAt: Date.now() } : { completedAt: Date.now() }) } : o);
            saveOrders(up);
        }} addDemoOrder={addDemoOrder} />}
        {activeTab === "yonetim" && <AdminDashboard key="yonetim" dict={dr} orders={orders} config={config} updateConfig={saveConfig} addDemoOrder={addDemoOrder} />}
      </AnimatePresence>

    </div>
  );
}

// -------------------------------------------------------------
// CUSTOMER MENU
// -------------------------------------------------------------

function CustomerMenu({ dict, config, onOrder, isPreview = false }: { dict: any, config: RestaurantConfig, onOrder?: (o: Order) => void, isPreview?: boolean }) {
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
    if (cartCount === 0 || !onOrder) return;
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
    <motion.div initial={!isPreview ? { opacity: 0 } : false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`${isPreview ? 'h-full overflow-y-auto no-scrollbar pb-24 bg-[#0a0a0a]' : 'pb-12'}`}>
      
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: config.themeColor }}>
              <Flame size={16} />
            </div>
            <span className="font-bold text-lg tracking-tight line-clamp-1">{config.name}</span>
          </div>
          <div className="flex items-center gap-2">
            {!isPreview && (
              <select 
                value={table} 
                onChange={(e) => setTable(Number(e.target.value))}
                className="bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-xs outline-none focus:border-white/30"
              >
                {Array.from({length: 20}).map((_, i) => (
                  <option key={i} value={i+1} className="bg-[#141414]">Masa {i+1}</option>
                ))}
              </select>
            )}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: config.themeColor }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mt-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 min-w-max pb-2">
            {categories.map((c, idx) => (
              <a 
                key={c.id} 
                href={isPreview ? undefined : `#cat-${c.id}`}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                style={idx === 0 ? { backgroundColor: config.themeColor, color: '#000' } : {}}
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-6 space-y-8">
        {categories.map(c => (
          <section key={c.id} id={isPreview ? undefined : `cat-${c.id}`} className="scroll-mt-36">
            <h2 className="text-lg font-bold mb-4" style={{ color: config.themeColor }}>{c.label}</h2>
            <div className="grid grid-cols-1 gap-3">
              {menuData[c.id as keyof typeof menuData].map(item => {
                const qty = cart[item.id] || 0;
                const info = dict.menu.items[item.id];
                return (
                  <div key={item.id} className={`p-3 rounded-2xl border transition-all duration-300 ${qty > 0 ? 'bg-white/5' : 'border-white/5 bg-[#141414] hover:border-white/10'}`} style={qty > 0 ? { borderColor: config.themeColor } : {}}>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-sm">{info?.name || item.id}</h3>
                        <p className="text-white/50 text-xs mt-1 mb-2 line-clamp-2">{info?.desc}</p>
                        <span className="font-bold text-sm" style={{ color: config.themeColor }}>{dict.common.currency}{item.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/5 shrink-0">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${qty > 0 ? 'bg-white/10 hover:bg-white/20 text-white' : 'text-white/20 cursor-not-allowed'}`}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-bold w-3 text-center text-xs">{qty}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center transition-colors text-black"
                          style={{ backgroundColor: config.themeColor }}
                        >
                          <Plus size={12} />
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

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 right-0 bottom-0 max-h-[80vh] bg-[#141414] border-t border-white/10 z-50 flex flex-col rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#1a1a1a] rounded-t-3xl">
                <h2 className="text-lg font-bold">{dict.menu.cart}</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                  <X size={16} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cartCount === 0 ? (
                  <p className="text-center text-white/40 mt-6 text-sm">{dict.menu.empty_cart}</p>
                ) : (
                  Object.entries(cart).map(([id, qty]) => {
                    const price = Object.values(menuData).flat().find(i => i.id === id)?.price || 0;
                    const info = dict.menu.items[id];
                    return (
                      <div key={id} className="flex justify-between items-center gap-2 text-sm">
                        <div>
                          <div className="font-semibold">{info?.name || id}</div>
                          <div className="text-xs" style={{ color: config.themeColor }}>{dict.common.currency}{price} x {qty}</div>
                        </div>
                        <div className="font-bold">{dict.common.currency}{price * qty}</div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="p-4 border-t border-white/10 bg-[#1a1a1a]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/60 text-sm">{dict.menu.total}:</span>
                  <span className="text-xl font-bold" style={{ color: config.themeColor }}>{dict.common.currency}{cartTotal}</span>
                </div>
                <button 
                  onClick={placeOrder}
                  disabled={cartCount === 0 || success}
                  className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
                    success ? 'bg-green-500 text-white' : 
                    cartCount > 0 ? 'text-black hover:brightness-110' : 'bg-white/10 text-white/40'
                  }`}
                  style={success ? {} : cartCount > 0 ? { backgroundColor: config.themeColor } : {}}
                >
                  {success ? (
                    <><Check className="mr-2" size={16} /> {dict.menu.success_msg}</>
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

// -------------------------------------------------------------
// KITCHEN SCREEN
// -------------------------------------------------------------

function KitchenScreen({ dict, orders, updateOrder, addDemoOrder }: { dict: any, orders: Order[], updateOrder: (id: string, s: OrderStatus) => void, addDemoOrder?: () => void }) {
  const newOrders = orders.filter(o => o.status === "new");
  const prepOrders = orders.filter(o => o.status === "preparing");
  const doneOrders = orders.filter(o => o.status === "completed").sort((a,b) => (b.completedAt||0) - (a.completedAt||0)).slice(0, 10);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4 md:p-8 max-w-7xl mx-auto h-screen flex flex-col">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#ef4444]/20 flex items-center justify-center text-[#ef4444]">
            <ChefHat size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{dict.kitchen.title}</h1>
            <p className="text-white/50 text-sm">Canlı sipariş akışı</p>
          </div>
        </div>
        {addDemoOrder && (
          <button 
            onClick={addDemoOrder}
            className="bg-[#ef4444] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#ef4444]/90 transition-colors shadow-lg shadow-[#ef4444]/20"
          >
            <Plus size={16} /> Demo Sipariş
          </button>
        )}
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

// -------------------------------------------------------------
// ADMIN DASHBOARD (SaaS Layout)
// -------------------------------------------------------------

function AdminDashboard({ dict, orders, config, updateConfig, addDemoOrder }: { dict: any, orders: Order[], config: RestaurantConfig, updateConfig: (c: RestaurantConfig) => void, addDemoOrder?: () => void }) {
  const [activeAdminTab, setActiveAdminTab] = useState("dashboard");

  const todayRevenue = orders.filter(o => o.status === "completed").reduce((acc, o) => acc + o.total, 0);
  const activeOrdersCount = orders.filter(o => o.status !== "completed").length;

  const sidebarLinks = [
    { section: "RESTORAN", links: [
      { id: "preview", label: "Müşteri Menüsü", icon: <MonitorPlay size={18} /> },
      { id: "kitchen", label: "Mutfak Ekranı", icon: <ChefHat size={18} />, badge: activeOrdersCount },
      { id: "tables", label: "Aktif Masalar", icon: <Users size={18} /> },
    ]},
    { section: "YÖNETİM", links: [
      { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
      { id: "menu", label: "Menü Editörü", icon: <List size={18} /> },
      { id: "tema", label: "Tema & QR", icon: <QrCode size={18} /> },
      { id: "settings", label: "Ayarlar", icon: <Settings size={18} /> },
    ]}
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-screen bg-[#050505] overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-64 bg-[#0a0a0a] border-r border-white/10 flex flex-col hidden md:flex shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <div className="w-6 h-6 rounded-md mr-3 flex items-center justify-center text-white" style={{ backgroundColor: config.themeColor }}>
            <UtensilsCrossed size={14} />
          </div>
          <span className="font-bold text-lg">OrderEasy Pro</span>
        </div>

        <div className="flex-1 overflow-y-auto py-6 space-y-8 no-scrollbar">
          {sidebarLinks.map((group, idx) => (
            <div key={idx} className="px-4">
              <div className="text-xs font-bold text-white/30 mb-3 px-2 tracking-wider">{group.section}</div>
              <div className="space-y-1">
                {group.links.map(link => (
                  <button 
                    key={link.id}
                    onClick={() => setActiveAdminTab(link.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm ${activeAdminTab === link.id ? 'bg-white/10 text-white font-semibold' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={activeAdminTab === link.id ? "" : "opacity-70"}>{link.icon}</span>
                      {link.label}
                    </div>
                    {link.badge && link.badge > 0 && (
                      <span className="bg-[#ef4444] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{link.badge}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center font-bold text-sm text-white">
            M
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate">Mehmet Karaca</div>
            <div className="text-xs text-white/40 truncate">Pro Plan</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-[#0a0a0a] border-b border-white/10 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="font-bold text-lg capitalize">{sidebarLinks.flatMap(g=>g.links).find(l=>l.id===activeAdminTab)?.label}</h2>
            {activeAdminTab === 'tema' && (
              <span className="flex items-center gap-1.5 text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Canlı · {activeOrdersCount} aktif sipariş
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-white/5 rounded-full text-white/60 hover:text-white transition-colors">
              <Bell size={18} />
            </button>
            <button className="p-2 hover:bg-white/5 rounded-full text-white/60 hover:text-white transition-colors">
              <HelpCircle size={18} />
            </button>
            <button className="ml-2 px-3 py-1.5 bg-[#ef4444]/10 text-[#ef4444] rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-[#ef4444]/20 transition-colors">
              Çıkış
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#050505]">
          {activeAdminTab === "tema" && <AdminTemaQR config={config} updateConfig={updateConfig} dict={dict} />}
          {activeAdminTab === "dashboard" && <AdminStats orders={orders} dict={dict} />}
          {activeAdminTab === "menu" && <AdminMenuEditor />}
          {activeAdminTab === "tables" && <AdminTables orders={orders} addDemoOrder={addDemoOrder} />}
          {activeAdminTab === "settings" && <AdminSettings config={config} />}
          
          {(activeAdminTab === "preview" || activeAdminTab === "kitchen") && (
            <div className="h-full flex items-center justify-center text-white/40">
              Görüntülemek için alt kısımdaki Demo Navigasyonunu kullanın.
            </div>
          )}
        </main>
      </div>
    </motion.div>
  );
}

function AdminTemaQR({ config, updateConfig, dict }: { config: RestaurantConfig, updateConfig: (c: RestaurantConfig) => void, dict: any }) {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Tema & QR</h1>
        <p className="text-white/50 text-sm">Restoranının görünümünü özelleştir, QR kodları yazdır</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sol Kolon - Ayarlar */}
        <div className="space-y-6">
          
          <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-6 text-white/80 font-semibold">
              <Flame size={16} style={{ color: config.themeColor }} /> Renk Teması
            </div>
            <div className="flex gap-3 mb-8">
              {THEME_COLORS.map(c => (
                <button
                  key={c.id}
                  onClick={() => updateConfig({...config, themeColor: c.value})}
                  className={`w-10 h-10 rounded-xl transition-all ${config.themeColor === c.value ? 'ring-2 ring-white scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'}`}
                  style={{ backgroundColor: c.value }}
                />
              ))}
            </div>

            <div className="space-y-2">
              <label className="text-xs text-white/50 font-semibold ml-1">Restoran Adı</label>
              <input 
                type="text" 
                value={config.name}
                onChange={e => updateConfig({...config, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                style={{ borderColor: config.themeColor ? `${config.themeColor}40` : '' }}
              />
            </div>
          </div>

          <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-6 text-white/80 font-semibold">
              <UtensilsCrossed size={16} className="text-[#22c55e]" /> Logo
            </div>
            <div className="border-2 border-dashed border-white/10 rounded-xl h-32 flex flex-col items-center justify-center text-white/40 hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer">
              <Upload size={24} className="mb-2" />
              <span className="text-sm font-semibold">Logo yüklemek için tıkla</span>
              <span className="text-xs mt-1">PNG, SVG - Max 2 MB</span>
            </div>
          </div>

          <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-white/80 font-semibold">
              <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div> Public Menü URL
            </div>
            <div className="flex bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
              <input 
                readOnly
                value={`https://app.ordereasypro.com/${config.name.toLowerCase().replace(/\s+/g, '')}`}
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white/60 outline-none"
              />
              <button className="px-4 bg-white/5 hover:bg-white/10 border-l border-white/10 text-sm font-semibold flex items-center gap-2 transition-colors">
                <Copy size={14} /> Kopyala
              </button>
            </div>
          </div>

        </div>

        {/* Sağ Kolon - Canlı Önizleme */}
        <div className="bg-[#141414] border border-white/10 p-6 rounded-2xl flex flex-col">
          <div className="flex items-center gap-2 mb-6 text-white/80 font-semibold">
            <MonitorPlay size={16} /> Canlı Önizleme
            <span className="ml-2 text-xs font-normal text-green-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> CANLI - Müşterinin gördüğü</span>
          </div>

          <div className="flex-1 flex items-center justify-center bg-[#0a0a0a] rounded-xl border border-white/5 p-4 overflow-hidden">
            {/* Phone Mockup */}
            <div className="w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-[#222] relative overflow-hidden shadow-2xl flex flex-col">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-2xl z-50 flex justify-center items-end pb-1">
                <div className="w-12 h-1.5 bg-black/50 rounded-full"></div>
              </div>
              
              {/* Simulated Status Bar */}
              <div className="h-6 w-full flex justify-between items-center px-6 text-[10px] font-bold text-white z-40 mt-1">
                <span>9:41</span>
                <span className="flex items-center gap-1">5G <div className="w-4 h-2 bg-white rounded-sm"></div></span>
              </div>

              {/* Injected CustomerMenu */}
              <div className="flex-1 relative overflow-hidden bg-[#0a0a0a]">
                <CustomerMenu dict={dict} config={config} isPreview={true} />
              </div>

              {/* Bottom Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-50"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Masa QR Kodları */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-white/80 font-bold">
            <QrCode size={20} /> Masa QR Kodları (Tüm Masalar)
          </div>
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg font-semibold text-sm transition-colors border border-white/10">
            <Download size={16} /> Tümünü PDF İndir
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-[#141414] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-white/20 transition-all group">
              <div className="font-bold text-sm text-white/80">Masa {i + 1}</div>
              <div className="bg-white p-2 rounded-xl">
                {/* Simulated QR Code using QrCode icon for demo */}
                <QrCode size={64} className="text-black" />
              </div>
              <button 
                className="text-xs font-semibold px-3 py-1.5 rounded-lg w-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: config.themeColor || '#fff' }}
              >
                İndir
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// -------------------------------------------------------------
// DUMMY ADMIN COMPONENTS (Other Tabs)
// -------------------------------------------------------------

function AdminStats({ orders, dict }: { orders: Order[], dict: any }) {
  // Demo veri
  const revenueData = [
    { name: 'Pzt', uv: 12400 },
    { name: 'Sal', uv: 11200 },
    { name: 'Çar', uv: 14500 },
    { name: 'Per', uv: 13800 },
    { name: 'Cum', uv: 18900 },
    { name: 'Cmt', uv: 22400 },
    { name: 'Paz', uv: 18420 },
  ];

  const hourlyData = [
    { name: '12:00', uv: 20 },
    { name: '13:00', uv: 45 },
    { name: '14:00', uv: 30 },
    { name: '15:00', uv: 15 },
    { name: '16:00', uv: 25 },
    { name: '17:00', uv: 40 },
    { name: '18:00', uv: 65 },
    { name: '19:00', uv: 85 },
    { name: '20:00', uv: 95 },
    { name: '21:00', uv: 70 },
  ];

  const miniBarData = [
    { uv: 4 }, { uv: 6 }, { uv: 5 }, { uv: 8 }, { uv: 7 }, { uv: 10 }, { uv: 9 }
  ];

  const topItems = [
    { name: "Adana Kebap", sales: 42, percentage: 100 },
    { name: "Pizza Margherita", sales: 33, percentage: 78 },
    { name: "Mercimek Çorbası", sales: 28, percentage: 66 },
    { name: "Ayran", sales: 25, percentage: 59 },
    { name: "Künefe", sales: 19, percentage: 45 },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 pb-24">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
          <p className="text-white/50 text-sm">Bugünün özeti ve performans göstergeleri</p>
        </div>
        <button className="flex items-center gap-2 bg-[#ef4444]/20 text-[#ef4444] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#ef4444]/30 transition-colors">
          <Download size={16} /> Rapor İndir
        </button>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Bugünkü Ciro", value: "₺18,420", trend: "↑ %12 dünden", color: "text-[#22c55e]" },
          { title: "Sipariş Sayısı", value: "142", trend: "↑ 23 dünden", color: "text-[#22c55e]" },
          { title: "Ortalama Sepet", value: "₺129", trend: "↑ ₺8 hafta önceye göre", color: "text-[#22c55e]" },
          { title: "En Çok Satan", value: "Adana Kebap", trend: "42 sipariş bugün", color: "text-[#22c55e]" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="text-white/40 text-xs font-semibold mb-2 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444]"></div> {stat.title}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className={`text-[10px] font-semibold ${stat.color}`}>{stat.trend}</div>
            </div>
            <div className="h-10 mt-4 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={miniBarData}>
                  <Bar dataKey="uv" fill="#ef4444" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="bg-[#141414] border border-white/5 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 font-semibold text-white/80">
            <TrendingUp size={16} className="text-white/40" /> Son 7 Gün Ciro Trendi
          </div>
          <div className="flex gap-2 text-xs font-semibold bg-white/5 p-1 rounded-lg">
            <button className="px-3 py-1 bg-white/10 text-white rounded-md">7G</button>
            <button className="px-3 py-1 text-white/40 hover:text-white">30G</button>
            <button className="px-3 py-1 text-white/40 hover:text-white">90G</button>
          </div>
        </div>
        
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₺${value}`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                itemStyle={{ color: '#ef4444', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="uv" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top 5 */}
        <div className="bg-[#141414] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-2 font-semibold text-white/80 mb-6">
            <span className="text-[#f59e0b]">🏆</span> En Çok Satan Top 5
          </div>
          <div className="space-y-5">
            {topItems.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="font-medium text-white/80"><span className="text-white/30 mr-2">#{i+1}</span>{item.name}</span>
                  <span className="font-bold text-[#ef4444]">{item.sales}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ef4444] rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hourly Chart */}
        <div className="bg-[#141414] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center gap-2 font-semibold text-white/80 mb-6">
            <Clock size={16} className="text-white/40" /> Saatlik Doluluk
          </div>
          <div className="h-48 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#ffffff10' }}
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px' }}
                />
                <Bar dataKey="uv" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminMenuEditor() {
  const [selectedId, setSelectedId] = useState<number>(0);
  const [search, setSearch] = useState("");

  const dummyProducts = [
    { id: 0, name: "Mercimek Çorbası", category: "başlangıç", price: 65, desc: "Geleneksel ev tipi, limon ile servis", icon: "🥣", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80" },
    { id: 1, name: "Mevsim Salata", category: "başlangıç", price: 75, desc: "Taze yeşillikler, zeytinyağı, limon", icon: "🥗", image: null },
    { id: 2, name: "Humus Tabağı", category: "başlangıç", price: 85, desc: "Nohut püresi, tahin, zeytinyağı", icon: "🌯", image: null },
    { id: 3, name: "Adana Kebap", category: "ana yemek", price: 220, desc: "Acılı, kıyma kebabı, közlenmiş biber ile...", icon: "🍢", image: null },
    { id: 4, name: "Köfte Tabağı", category: "ana yemek", price: 195, desc: "Izgara köfte, pilav ve patates", icon: "🍖", image: null },
    { id: 5, name: "Pizza Margherita", category: "ana yemek", price: 175, desc: "İnce hamur, domates sos, mozzarella", icon: "🍕", image: null },
    { id: 6, name: "Lahmacun", category: "ana yemek", price: 95, desc: "Çıtır hamur, kıyma harcı", icon: "🌮", image: null },
    { id: 7, name: "Tavuk Şiş", category: "ana yemek", price: 185, desc: "Terbiye edilmiş tavuk göğsü", icon: "🍗", image: null },
    { id: 8, name: "Ayran", category: "içecek", price: 25, desc: "Ev yapımı köpüklü ayran", icon: "🥛", image: null },
  ];

  const filtered = dummyProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  const selectedProduct = dummyProducts.find(p => p.id === selectedId) || dummyProducts[0];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 pb-24 h-[calc(100vh-64px)] flex flex-col">
      <div className="flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-2xl font-bold mb-1">Menü Editörü</h1>
          <p className="text-white/50 text-sm">Yemekleri ekle, düzenle, AI ile fotoğraf üret</p>
        </div>
        <button className="bg-[#ef4444] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#ef4444]/90 transition-colors">
          <Plus size={16} /> Yeni Yemek
        </button>
      </div>

      <div className="flex-1 min-h-0 flex gap-6">
        {/* Sol Kolon - Liste */}
        <div className="w-[380px] bg-[#141414] border border-white/5 rounded-2xl flex flex-col overflow-hidden shrink-0">
          <div className="p-4 border-b border-white/5 flex items-center justify-between bg-[#1a1a1a]">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
              Tüm Yemekler ({dummyProducts.length})
            </div>
            <div className="relative w-32">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input 
                type="text" 
                placeholder="Ara..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs outline-none focus:border-white/30 transition-colors"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-1">
            {filtered.map(p => (
              <button 
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors ${selectedId === p.id ? 'bg-white/10 ring-1 ring-white/20' : 'hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${selectedId === p.id ? 'bg-[#f59e0b]' : 'bg-white/5'}`}>
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white/90">{p.name}</div>
                    <div className="text-xs text-white/40">{p.category}</div>
                  </div>
                </div>
                <div className="font-bold text-[#ef4444] text-sm">₺{p.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Sağ Kolon - Detaylar */}
        <div className="flex-1 bg-[#141414] border border-white/5 rounded-2xl flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-[#1a1a1a]">
            <h2 className="font-bold text-white/90">Yemek: {selectedProduct.name}</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {selectedProduct.image ? (
              <div className="w-full h-64 bg-[#f59e0b] rounded-2xl overflow-hidden relative flex items-center justify-center">
                <div className="text-[100px] drop-shadow-2xl">{selectedProduct.icon}</div>
                <button className="absolute bottom-4 right-4 bg-[#ef4444] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#ef4444]/90 shadow-lg">
                  <Camera size={16} /> Yeniden Üret
                </button>
              </div>
            ) : (
              <div className="w-full h-64 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center bg-[#0a0a0a]">
                <UtensilsCrossed size={32} className="text-white/20 mb-4" />
                <div className="text-white/40 font-semibold mb-4 text-sm">Yemek fotoğrafı yok</div>
                <button className="bg-[#ef4444] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#ef4444]/90">
                  <Camera size={16} /> AI ile Fotoğraf Üret
                </button>
                <div className="text-[10px] text-white/30 mt-3 max-w-[200px] text-center">Yemek adını yaz, AI saniyeler içinde profesyonel fotoğraf üretsin</div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="text-xs text-white/50 font-semibold ml-1 block mb-1">Yemek Adı</label>
                <input 
                  type="text" 
                  value={selectedProduct.name}
                  readOnly
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-white/50 font-semibold ml-1 block mb-1">Açıklama</label>
                <textarea 
                  value={selectedProduct.desc}
                  readOnly
                  rows={2}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/50 font-semibold ml-1 block mb-1">Fiyat (₺)</label>
                  <input 
                    type="number" 
                    value={selectedProduct.price}
                    readOnly
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/50 font-semibold ml-1 block mb-1">Kategori</label>
                  <select 
                    value={selectedProduct.category}
                    disabled
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none appearance-none opacity-70 cursor-not-allowed"
                  >
                    <option value="başlangıç">Başlangıç</option>
                    <option value="ana yemek">Ana Yemek</option>
                    <option value="içecek">İçecek</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/5 bg-[#1a1a1a] flex gap-3">
            <button className="flex-1 bg-[#ef4444] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#ef4444]/90">
              Kaydet
            </button>
            <button className="px-5 bg-[#0a0a0a] text-white/60 border border-white/10 py-3 rounded-xl hover:bg-white/5 hover:text-[#ef4444] transition-colors flex items-center justify-center">
              Sil <Trash2 size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminTables({ orders, addDemoOrder }: { orders: Order[], addDemoOrder?: () => void }) {
  const activeTables = Array.from({length: 12}, (_, i) => {
    const t = i + 1;
    const isActive = orders.some(o => o.table === t && o.status !== 'completed');
    return { table: t, active: isActive };
  });

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Aktif Masalar</h1>
          <p className="text-white/50 text-sm">Masaların anlık durumu</p>
        </div>
        {addDemoOrder && (
          <button 
            onClick={addDemoOrder}
            className="bg-[#3b82f6] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#3b82f6]/90 transition-colors shadow-lg shadow-[#3b82f6]/20"
          >
            <Plus size={16} /> Demo Sipariş
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {activeTables.map(t => (
          <div key={t.table} className={`p-6 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${t.active ? 'bg-[#3b82f6]/10 border-[#3b82f6]/30 text-[#3b82f6]' : 'bg-[#141414] border-white/5 text-white/40'}`}>
            <Users size={24} />
            <span className="font-bold">Masa {t.table}</span>
            <span className="text-xs">{t.active ? 'Dolu' : 'Boş'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminSettings({ config }: { config: RestaurantConfig }) {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-1">Ayarlar</h1>
        <p className="text-white/50 text-sm">Sistem yapılandırması</p>
      </div>

      <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 max-w-xl space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Firma Unvanı</label>
          <input type="text" defaultValue="OrderEasy Teknoloji A.Ş." className="w-full bg-black border border-white/10 rounded-lg p-3 text-sm text-white/50" readOnly />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Sistem Dili</label>
          <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-sm outline-none">
            <option>Türkçe</option>
            <option>English</option>
            <option>Deutsch</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Para Birimi</label>
          <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg p-3 text-sm outline-none">
            <option>TRY (₺)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>
        <button className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-200">Ayarları Kaydet</button>
      </div>
    </div>
  );
}
