import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { InventoryItem } from '../../models/inventory-item.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  items: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.inventoryService.getAllItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem(item: InventoryItem): void {
    this.inventoryService.addItem(item).subscribe(newItem => {
      this.items.push(newItem);
    });
  }

  editItem(item: InventoryItem): void {
    // Implement edit logic here (e.g., open a modal)
  }

  deleteItem(id: number): void {
    this.inventoryService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
    });
  }
}
