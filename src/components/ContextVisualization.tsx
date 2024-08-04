"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, ArrowDownCircle } from "lucide-react";

const MotionDiv = motion.div;
const MotionButton = motion.button;

interface ThemeContextType {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ToggleButton: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ToggleButton must be used within a ThemeProvider");
  }
  const { isDark, setIsDark } = context;
  return (
    <MotionButton
      onClick={() => setIsDark(!isDark)}
      className={`px-6 py-3 rounded-full flex items-center justify-center space-x-2 text-sm font-medium transition-colors ${
        isDark ? "bg-blue-500 text-white" : "bg-yellow-400 text-gray-900"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDark ? (
        <Moon className="w-4 h-4 mr-2" />
      ) : (
        <Sun className="w-4 h-4 mr-2" />
      )}
      {isDark ? "Dark Mode" : "Light Mode"}
    </MotionButton>
  );
};

const DeepNestedComponent: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("DeepNestedComponent must be used within a ThemeProvider");
  }
  const { isDark } = context;
  return (
    <MotionDiv
      className={`p-6 rounded-lg shadow-lg ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-semibold mb-2">Deeply Nested Component</p>
      <p className="text-sm">
        This component accesses the theme directly from context, without prop
        drilling.
      </p>
    </MotionDiv>
  );
};

const ContextVisualizationContent: React.FC = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "ContextVisualizationContent must be used within a ThemeProvider"
    );
  }
  const { isDark } = context;
  return (
    <MotionDiv
      className={`flex flex-col items-center space-y-8 p-8 rounded-xl transition-colors ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-2xl font-bold">React Context Visualization</p>
      <ToggleButton />
      <MotionDiv
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <ArrowDownCircle
          className={`w-8 h-8 ${isDark ? "text-blue-400" : "text-yellow-500"}`}
        />
        <MotionDiv
          className="h-16 w-0.5 bg-gradient-to-b from-transparent via-current to-transparent my-2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <ArrowDownCircle
          className={`w-8 h-8 ${isDark ? "text-blue-400" : "text-yellow-500"}`}
        />
      </MotionDiv>
      <DeepNestedComponent />
    </MotionDiv>
  );
};

const ContextVisualization: React.FC = () => {
  return (
    <ThemeProvider>
      <ContextVisualizationContent />
    </ThemeProvider>
  );
};

export default ContextVisualization;
