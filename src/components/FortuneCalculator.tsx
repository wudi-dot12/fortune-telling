import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Sparkles } from "lucide-react";
import FortuneResult from "./FortuneResult";

interface FortuneCalculatorProps {
  onCalculate?: (name: string, birthdate: Date) => void;
  initialName?: string;
  initialBirthdate?: Date;
}

const FortuneCalculator: React.FC<FortuneCalculatorProps> = ({
  onCalculate = () => {},
  initialName = "",
  initialBirthdate = new Date(1990, 0, 1),
}) => {
  const [name, setName] = useState<string>(initialName);
  const [birthdate, setBirthdate] = useState<Date | undefined>(
    initialBirthdate,
  );
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const handleCalculate = () => {
    if (!name || !birthdate) return;

    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      onCalculate(name, birthdate);
      setShowResult(true);
      setIsCalculating(false);
    }, 1500);
  };

  const handleReset = () => {
    setShowResult(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
      {!showResult ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">个人运势计算器</h2>
            <p className="text-gray-600">
              输入您的姓名和生日，获取专业的运势分析报告
            </p>
          </div>

          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    您的姓名
                  </Label>
                  <Input
                    id="name"
                    placeholder="请输入您的姓名"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="birthdate" className="text-base font-medium">
                    您的生日
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-12 text-lg justify-start text-left font-normal border border-gray-200"
                      >
                        <CalendarIcon className="mr-2 h-5 w-5" />
                        {birthdate ? (
                          format(birthdate, "yyyy年MM月dd日")
                        ) : (
                          <span className="text-gray-400">请选择您的生日</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={birthdate}
                        onSelect={setBirthdate}
                        initialFocus
                        disabled={(date) => date > new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button
                    type="button"
                    onClick={handleCalculate}
                    disabled={!name || !birthdate || isCalculating}
                    className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    {isCalculating ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        正在计算...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" /> 计算运势
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-gray-500">
            我们使用东方玄学、紫微斗数、易经和西方星座学的综合分析方法，为您提供专业的运势预测
          </div>
        </motion.div>
      ) : (
        <div className="space-y-6">
          <FortuneResult
            name={name}
            birthdate={birthdate ? format(birthdate, "yyyy-MM-dd") : ""}
          />
          <div className="flex justify-center">
            <Button onClick={handleReset} variant="outline" className="mt-4">
              返回重新计算
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FortuneCalculator;
