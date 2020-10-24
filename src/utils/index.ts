export const isClient = (): boolean => typeof window !== undefined;

export const sanitizeEncodedChar = (text: string): string => {
  if (text && typeof text === 'string') {
    return text.replace(
      /&#(?:x([\da-f]+)|(\d+));/gi,
      (_, hex: string, dec: number): string =>
        String.fromCharCode(dec || +('0x' + hex))
    );
  }
  return String(text);
};

export const getProtocol = (): string => process.env?.NODE_ENV === 'production' ? 'https://' : 'http://';

export const getHost = (req): string => req?.headers?.host;
