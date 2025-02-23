import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private apiUrl = 'https://fakestoreapi.com/products?limit=10';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return throwError(() => new Error('Failed to fetch products. Please try again later.'));
      })
    );
  }
  getMockChartData(): { salesData: any[]; visitData: any[]; weekDays: string[] } {
    return {
      salesData: [
        { name: "Sales", data: this.generateRandomData(7, 10, 50) }
      ],
      visitData: [
        { name: "Visits", data: this.generateRandomData(7, 50, 150) }
      ],
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    };
  }

  getMockProducts(): Observable<Product[]> {
    const mockProducts: Product[] = [
      { 
        id: 1, 
        title: "Smartphone", 
        price: 699, 
        category: "Electronics",
        description: "A high-end smartphone with an advanced camera.",
        image: "https://via.placeholder.com/150",
        rating: { rate: 4.5, count: 120 }
      },
      { 
        id: 2, 
        title: "Laptop", 
        price: 1299, 
        category: "Electronics",
        description: "A powerful laptop for gaming and work.",
        image: "https://via.placeholder.com/150",
        rating: { rate: 4.7, count: 85 }
      },
      { 
        id: 3, 
        title: "Running Shoes", 
        price: 120, 
        category: "Fashion",
        description: "Comfortable running shoes for daily workouts.",
        image: "https://via.placeholder.com/150",
        rating: { rate: 4.3, count: 200 }
      },
      { 
        id: 4, 
        title: "Backpack", 
        price: 49, 
        category: "Accessories",
        description: "A stylish and spacious backpack for travel.",
        image: "https://via.placeholder.com/150",
        rating: { rate: 4.0, count: 150 }
      },
      { 
        id: 5, 
        title: "Smartwatch", 
        price: 199, 
        category: "Electronics",
        description: "A smartwatch with fitness tracking features.",
        image: "https://via.placeholder.com/150",
        rating: { rate: 4.6, count: 95 }
      }
    ];
    return of(mockProducts);
  }
  

  private generateRandomData(count: number, min: number, max: number): number[] {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1) + min));
  }

}
