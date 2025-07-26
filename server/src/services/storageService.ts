import { Storage } from 'some-storage-library'; // Replace with actual storage library import

class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = new Storage(); // Initialize storage
  }

  // Save data to storage
  public saveData(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  // Retrieve data from storage
  public getData(key: string): any {
    const data = this.storage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Remove data from storage
  public removeData(key: string): void {
    this.storage.removeItem(key);
  }

  // Clear all storage
  public clearStorage(): void {
    this.storage.clear();
  }
}

export default new StorageService();