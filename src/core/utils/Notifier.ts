type Listener = (event: string, data: any) => void;
class Notifier {
  private static instance: Notifier;
    private listeners: Map<string, Listener[]> = new Map();
    private constructor() {}
    static getInstance(): Notifier {
        if (!Notifier.instance) {
            Notifier.instance = new Notifier();
        }
        return Notifier.instance;
    }
    subscribe(event: string, listener: Listener): void {    
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event)!.push(listener);
    }
    unsubscribe(event: string, listener: Listener): void {
        if (this.listeners.has(event)) {
            const listeners = this.listeners.get(event)!;
            this.listeners.set(event, listeners.filter(l => l !== listener));
        }
    }
    notify(event: string, data: any): void {
        if (this.listeners.has(event)) {
            this.listeners.get(event)!.forEach(listener => listener(event, data));
        }
    }
}

export default Notifier;
