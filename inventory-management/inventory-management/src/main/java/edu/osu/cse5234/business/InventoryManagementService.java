package edu.osu.cse5234.business;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("inventory")
public class InventoryManagementService {

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Inventory getInventory() {
		Inventory currentInventory = new Inventory();
		List<Item> availableItems = new ArrayList<Item>();
		
		
		availableItems.add(new Item(1, "hi", 1, 1));
		availableItems.add(new Item(2, "hii", 2, 2));
		availableItems.add(new Item(3, "hiii", 3, 3));
		
		currentInventory.setItems(availableItems);
		return currentInventory;
	}
	
	
}
