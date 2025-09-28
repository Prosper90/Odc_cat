// Price service for fetching real-time token prices
export class PriceService {
  private static instance: PriceService;
  private priceCache = new Map<string, { price: number; timestamp: number }>();
  private readonly CACHE_DURATION = 30000; // 30 seconds

  static getInstance(): PriceService {
    if (!PriceService.instance) {
      PriceService.instance = new PriceService();
    }
    return PriceService.instance;
  }

  // Dummy prices for testing - replace with real API calls
  private getDummyPrice(symbol: string): number {
    const dummyPrices: Record<string, number> = {
      'ODC': 0.00012727, // Your dummy price for ODC
      'BNB': 235.42,
      'WBNB': 235.42,
      'USDT': 1.00,
    };
    return dummyPrices[symbol] || 0;
  }

  async getTokenPrice(symbol: string): Promise<number> {
    const cached = this.priceCache.get(symbol);
    const now = Date.now();

    // Return cached price if still valid
    if (cached && (now - cached.timestamp) < this.CACHE_DURATION) {
      return cached.price;
    }

    try {
      // For now, use dummy prices. Replace with real API calls later
      const price = this.getDummyPrice(symbol);

      // Cache the price
      this.priceCache.set(symbol, { price, timestamp: now });

      return price;
    } catch (error) {
      console.error(`Error fetching price for ${symbol}:`, error);
      return this.getDummyPrice(symbol);
    }
  }

  async getTokenPrices(symbols: string[]): Promise<Record<string, number>> {
    const prices: Record<string, number> = {};

    await Promise.all(
      symbols.map(async (symbol) => {
        prices[symbol] = await this.getTokenPrice(symbol);
      })
    );

    return prices;
  }

  // Calculate price change (dummy implementation)
  getPriceChange24h(symbol: string): number {
    const changes: Record<string, number> = {
      'ODC': 1.51,
      'BNB': -0.73,
      'WBNB': -0.73,
      'USDT': 0.02,
    };
    return changes[symbol] || 0;
  }

  // Get trading volume (dummy implementation)
  getVolume24h(symbol: string): number {
    const volumes: Record<string, number> = {
      'ODC': 847291,
      'BNB': 2456832,
      'WBNB': 2456832,
      'USDT': 5234567,
    };
    return volumes[symbol] || 0;
  }
}

export const priceService = PriceService.getInstance();