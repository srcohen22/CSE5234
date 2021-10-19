package edu.osu.cse5234.business;
import java.util.ArrayList;
import java.util.List;

public class Inventory {
	
	List<Item> inventory_;
	
	public Inventory() {
		
	}
	
	public Inventory(List<Item> inventory) {
		super();
		this.inventory_ = inventory;
	}

	public List<Item> getItems() {
		return this.inventory_;
	}
	
	public void setItems(List<Item> items) {
		this.inventory_ = items;
	}
	
}