import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 格式化數值成會計格式
export const formatCurrency = (inputValue: string) => {
  // 移除所有非數字字符
  const numericValue = inputValue.replace(/[^0-9]/g, "");
  // 如果輸入值是空的，將其設為0
  if (numericValue === "") {
    return "$ 0";
  }
  // 將數值轉換成會計格式
  const formattedValue = parseFloat(numericValue).toLocaleString("en-US");
  return `$ ${formattedValue}`;
};

// 格式化數值成會計格式
export const formatAmount = (inputValue: string) => {
  // 移除所有非數字字符
  const numericValue = inputValue.replace(/[^0-9]/g, "");
  // 如果輸入值是空的，將其設為0
  if (numericValue === "") {
    return "0";
  }
  // 將數值轉換成會計格式
  const formattedValue = parseFloat(numericValue).toLocaleString("en-US");
  return `${formattedValue}`;
};

export const formatToMoney = (value: number) => {
  // Convert the value to a number in case it's a string
  const number = Number(value);

  // Format the number as a currency
  const formatted = new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.abs(number));

  // If the original number is negative, add a minus sign before the formatted value
  return number < 0 ? `-${formatted}` : formatted;
};

export const getPeriod = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() - 1911; // 获取当前年份
  const currentMonth = currentDate.getMonth() + 1; // 获取当前月份（注意：月份是从0开始计数的）
  const data = [];
  let year = currentYear;
  let monthS = currentMonth % 2 !== 0 ? currentMonth + 1 : currentMonth;
  let monthE = currentMonth % 2 !== 0 ? currentMonth + 1 : currentMonth;
  for (let i = 0; i < 12; i++) {
    const startMonth = monthS - 2 >= 0 ? monthS : 12;
    monthS = startMonth - 2;
    const endMonth = monthE - 1 > 0 ? monthE - 1 : 11;
    monthE = endMonth - 1;

    const displayMonth = `${year} 年 ${endMonth} - ${startMonth} 期`;

    data.push(displayMonth);
    if (monthS - 2 < 0) {
      year = year - 1;
    }
  }
  return data;
};

export function formatMonth1(phase: number) {
  if (phase === 1) {
    return "01";
  } else if (phase === 3) {
    return "03";
  } else if (phase === 5) {
    return "05";
  } else if (phase === 7) {
    return "07";
  } else if (phase === 9) {
    return "09";
  } else if (phase === 11) {
    return "11";
  }
}

export function formatMonth2(phase: number) {
  if (phase === 1) {
    return "02";
  } else if (phase === 3) {
    return "04";
  } else if (phase === 5) {
    return "06";
  } else if (phase === 7) {
    return "08";
  } else if (phase === 9) {
    return "10";
  } else if (phase === 11) {
    return "12";
  }
}

export function searchPhase(month: number) {
  if (month === undefined) {
    return 0; // 或者任何合適的默認值
  }
  if (month === 1) {
    return 1;
  } else if (month === 2) {
    return 1;
  } else if (month === 3) {
    return 3;
  } else if (month === 4) {
    return 3;
  } else if (month === 5) {
    return 5;
  } else if (month === 6) {
    return 5;
  } else if (month === 7) {
    return 7;
  } else if (month === 8) {
    return 7;
  } else if (month === 9) {
    return 9;
  } else if (month === 10) {
    return 9;
  } else if (month === 11) {
    return 11;
  } else if (month === 12) {
    return 11;
  }
}
export function searchPhase2(month: number) {
  if (month === 1) {
    return 2;
  } else if (month === 2) {
    return 2;
  } else if (month === 3) {
    return 4;
  } else if (month === 4) {
    return 4;
  } else if (month === 5) {
    return 6;
  } else if (month === 6) {
    return 6;
  } else if (month === 7) {
    return 8;
  } else if (month === 8) {
    return 8;
  } else if (month === 9) {
    return 10;
  } else if (month === 10) {
    return 10;
  } else if (month === 11) {
    return 12;
  } else if (month === 12) {
    return 12;
  }
}
export function searchPhaseString(month: string) {
  if (month === "1") {
    return "1";
  } else if (month === "2") {
    return "1";
  } else if (month === "3") {
    return "3";
  } else if (month === "4") {
    return "3";
  } else if (month === "5") {
    return "5";
  } else if (month === "6") {
    return "5";
  } else if (month === "7") {
    return "7";
  } else if (month === "8") {
    return "7";
  } else if (month === "9") {
    return "9";
  } else if (month === "10") {
    return "9";
  } else if (month === "11") {
    return "11";
  } else if (month === "12") {
    return "11";
  }
}

// 將西元日期轉換為民國日期
export function toMinguoDate(date: Date) {
  console.log(date);
  const minguoYear = (parseInt(format(date, "yyyy")) - 1911).toString();
  const minguoDateString = format(date, "MM / dd");
  return `${minguoYear} / ${minguoDateString}`;
}

export function toMinguoDate2(date: Date) {
  const minguoYear = (parseInt(format(date, "yyyy")) - 1911).toString();
  const minguoDateString = format(date, "MM");
  return `民國 ${minguoYear} 年 ${minguoDateString} 月`;
}
export function toMinguoDate3(date: Date) {
  const minguoYear = (parseInt(format(date, "yyyy")) - 1911).toString();
  return minguoYear;
}
export function toMinguoDate4(date: Date) {
  const minguoDateString = format(date, "MM");
  return minguoDateString;
}
//轉換發票顯示格式
export function formatString(str: string) {
  return str.slice(0, 2) + "-" + str.slice(2);
}
