export default function delay(delay: number = 1000): Promise<null> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
