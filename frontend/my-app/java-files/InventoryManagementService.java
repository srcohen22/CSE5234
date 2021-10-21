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
		
		String CHEESE_CASSEROLE_DESC = "Enjoy this delectable home-style meal cooked by only the most homely of chefs. This bundle of cheesy goodness will melt your taste buds through the sheer potency of its existence.";
		
		
		
		availableItems.add(new Item(1, "Cheese Casserole", CHEESE_CASSEROLE_DESC, 1, 0, 1, "../assets/cheesecasserole.jpg"));
		availableItems.add(new Item(2, "hii", "", 2, 0, 2, ""));
		availableItems.add(new Item(3, "hiii", "", 3, 0, 3, ""));
		
		currentInventory.setItems(availableItems);
		return currentInventory;
	}
}