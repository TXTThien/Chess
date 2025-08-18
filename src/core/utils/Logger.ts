class Logger{
    private static instance: Logger;
    private constructor() {}
    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    info(message: string): void {
        console.log(`[INFO]: ${message}`);
    }
    warn(message: string): void {
        console.warn(`[WARN]: ${message}`);
    }
    error(message: string): void {
        console.error(`[ERROR]: ${message}`);
    }
    debug(message: string): void {
        console.debug(`[DEBUG]: ${message}`);
    }
    log(message: string): void {
        console.log(`[LOG]: ${message}`);
    }
    trace(message: string): void {
        console.trace(`[TRACE]: ${message}`);
    }
}

export default Logger;