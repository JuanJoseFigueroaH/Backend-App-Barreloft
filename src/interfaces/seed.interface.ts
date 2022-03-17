export interface IFileSeed {
    main():Promise<void>;
    order: number; 
    fileName: string;
} 