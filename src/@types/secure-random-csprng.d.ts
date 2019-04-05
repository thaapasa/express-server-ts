declare module 'random-number-csprng' {
  function secureRandomNumber(minimum: number, maximum: number, cb: (err: Error, result: number) => void): void;
  export = secureRandomNumber
}
