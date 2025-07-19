"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PaymentGateway() {
  const [selectedCurrency, setSelectedCurrency] = useState('ETH');
  const [payAmount, setPayAmount] = useState('0');
  const [receiveAmount, setReceiveAmount] = useState('0');

  const currencies = ['ETH', 'POL', 'BNB', 'USD'];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Main Container */}
        <div className="bg-white rounded-3xl border-4 border-black p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">
              Buy<span className="bg-yellow-400 text-black px-2 rounded">$DEBO</span>Coin
            </h1>
          </div>

          {/* USD Raised Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-gray-700">USD Raised</span>
              <span className="text-lg font-bold">555,686.297 / 750,000</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full h-8 bg-gray-200 rounded-full border-2 border-black overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300"
                  style={{ width: '74.09%' }}
                ></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-sm">74.09%</span>
              </div>
            </div>
          </div>

          {/* Exchange Rate */}
          <div className="mb-8">
            <p className="text-2xl font-bold text-black">1$DEBO = $0.011</p>
          </div>

          {/* Currency Selection */}
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              {currencies.map((currency) => (
                <button
                  key={currency}
                  onClick={() => setSelectedCurrency(currency)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                    selectedCurrency === currency
                      ? 'bg-white border-4 border-black text-black'
                      : 'bg-gray-100 border-2 border-gray-300 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {currency}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pay With {selectedCurrency}
                </label>
                <input
                  type="text"
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  className="w-full text-2xl font-bold bg-transparent border-none outline-none text-black"
                  placeholder="0"
                />
              </div>
              
              {/* Arrow Icon */}
              <div className="mx-4">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <ChevronDown className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="flex-1 text-right">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  You Get
                </label>
                <input
                  type="text"
                  value={receiveAmount}
                  onChange={(e) => setReceiveAmount(e.target.value)}
                  className="w-full text-2xl font-bold bg-transparent border-none outline-none text-black text-right"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <button className="w-full bg-white border-4 border-black rounded-2xl py-4 font-bold text-xl text-black hover:bg-gray-50 transition-colors mb-6">
            Connect Wallet
          </button>

          {/* Balance Information */}
          <div className="flex justify-between text-sm text-gray-600">
            <span>Your $DEBO Balance 0</span>
            <span>Your Staked $DEBO 0</span>
          </div>
        </div>
      </div>
    </div>
  );
}