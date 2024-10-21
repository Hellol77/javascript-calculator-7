import { Console } from "@woowacourse/mission-utils";
import { DEFAULT_DELIMITERS } from "../constants/delimiters.js";
import calculateSum from "../utils/calculateSum.js";

export default class Calculator {
  #inputString;
  #delimiters;

  constructor(inputString) {
    this.#inputString = inputString;
    this.#delimiters = DEFAULT_DELIMITERS;
  }

  calculate() {
    this.#addCustomDelimiter();
    const numberArr = this.#splitByDelimiters();
  }

  #splitByDelimiters() {
    const delimiterString = this.#delimiters.join("");
    const delimiterRegex = new RegExp(`[${delimiterString}]`);
    return this.#inputString.split(delimiterRegex).map(Number);
  }

  #addCustomDelimiter() {
    const customDelimiterPattern = /^\/\/(.+)\\n/;
    const customDelimiterMatch = this.#inputString.match(customDelimiterPattern);

    if (customDelimiterMatch) {
      Console.print(customDelimiterMatch[1]);
      const costomDelimiter = customDelimiterMatch[1];
      this.#delimiters.push(costomDelimiter);
    }
  }
}