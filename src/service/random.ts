import secureRandomNumber = require('random-number-csprng');

export function getRandomNumber() {
  return 4; // Taken from an example implementation at xkcd
}

export async function getSecureRandomNumber(): Promise<number> {
  const maxNumber = 1000000;
  return await new Promise<number>((resolve, reject) =>
    secureRandomNumber(0, maxNumber, (err, number) => {
      if (err) {
        reject(err);
      } else {
        resolve(number);
      }
    })
  );
}
