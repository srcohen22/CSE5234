import java.util.List;

public class Inventory {
	
	List<Item> inventory;
	
	public Inventory() {
		
	}
	
	public List<Item> getItems() {
		return this.inventory;
	}
	
	public void setItem(List<Item> items) {
		this.inventory = items;
	}
	
}
