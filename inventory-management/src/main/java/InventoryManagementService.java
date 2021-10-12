import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Path;

@Path("inventory")
public class InventoryManagementService {
	
	public Inventory getInventory() {
		Inventory currentInventory = new Inventory();
		List<Item> availableItems = new ArrayList<Item>();
		availableItems.add(new Item(1, "Coffee", 1000, 4.00));
		availableItems.add(new Item(2, "Cantaloupe", 1000, 5.00));
		availableItems.add(new Item(3, "Cheese Casserole", 1000, 10.00));
		availableItems.add(new Item(4, "Carrot Cake", 1000, 8.00));
		availableItems.add(new Item(5, "Corn Chowder", 1000, 9.00));
		availableItems.add(new Item(6, "Chicken Chilaquiles", 1000, 12.00));
		currentInventory.setItem(availableItems);
		return currentInventory;
	}	
}