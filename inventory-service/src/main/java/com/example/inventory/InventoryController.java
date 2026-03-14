package com.example.inventory;
import java.util.Map;
import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/inventory")
public class InventoryController {

    private final StockRepository repo;

    public InventoryController(StockRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/update")
    public List<Stock> update(@RequestBody Map<String, Integer> items) {
        items.forEach((name, qty) -> {
            Stock s = new Stock();
            s.setName(name);
            s.setQty(qty);
            repo.save(s);
        });
        return repo.findAll();
    }

    @GetMapping("/view")
    public List<Stock> view() {
        return repo.findAll();
    }
}