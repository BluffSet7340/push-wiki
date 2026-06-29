export interface Article {
  tfa: {
    normalizedtitle: string;
    originalimage: {
      source: string;
      width: number;
      height: number;
    };
    extract: string;
  };
}
