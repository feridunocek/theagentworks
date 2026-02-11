"use client";

import { useState, useEffect } from 'react';

// Default values
const DEFAULT_WEEKLY_HOURS = 40;
const ROLE_RATES = {
    operational: 500, // Operasyonel Destek
    expert: 1200,     // Uzman
    manager: 2500     // Yönetici
};

export type CalculatorRole = keyof typeof ROLE_RATES;

export function useRoiCalculator() {
    const [weeklyHours, setWeeklyHours] = useState(DEFAULT_WEEKLY_HOURS);
    const [selectedRole, setSelectedRole] = useState<CalculatorRole>('operational');

    // Derived hourly cost based on role
    const hourlyCost = ROLE_RATES[selectedRole];

    const [results, setResults] = useState({
        annualLoss: 0,
        recoveredHours: 0,
        estimatedValueGain: 0,
        digitalEquivalent: 0 // How many full time employees
    });

    useEffect(() => {
        // Annual Loss (Hidden logic but still useful) = Weekly Hours * 52 Weeks * Hourly Cost
        const annualLoss = weeklyHours * 52 * hourlyCost;

        // Recovered Hours (100% of repetitive work delegated)
        const recoveredHours = weeklyHours * 52;

        // Estimated Value Gain (Time * Rate)
        // AgentWorks efficient delegation allows reclaiming this value
        const estimatedValueGain = recoveredHours * hourlyCost;

        // Full Time Employee Equivalent (Assuming ~160h/month * 12 = 1920h/year)
        const digitalEquivalent = recoveredHours / 1920;

        setResults({
            annualLoss,
            recoveredHours,
            estimatedValueGain,
            digitalEquivalent
        });

        // Simple persistence
        localStorage.setItem('agentworks_calculator_v2', JSON.stringify({ weeklyHours, selectedRole }));
    }, [weeklyHours, selectedRole, hourlyCost]);

    useEffect(() => {
        // Hydrate from localStorage
        const saved = localStorage.getItem('agentworks_calculator_v2');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.weeklyHours) setWeeklyHours(parsed.weeklyHours);
                if (parsed.selectedRole && ROLE_RATES[parsed.selectedRole as CalculatorRole]) {
                    setSelectedRole(parsed.selectedRole as CalculatorRole);
                }
            } catch (e) {
                console.error("Failed to load calculator state", e);
            }
        }
    }, []);

    return {
        weeklyHours,
        setWeeklyHours,
        selectedRole,
        setSelectedRole,
        results
    };
}
