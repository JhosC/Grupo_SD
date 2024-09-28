package controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Controller
public class FileUploadController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @GetMapping("/files")
    public String listUploadedFiles(Model model) {
        File directory = new File(uploadDir);
        List<String> fileNames = new ArrayList<>();
        
        if (directory.exists() && directory.isDirectory()) {
            for (File file : directory.listFiles()) {
                if (file.isFile()) {
                    fileNames.add(file.getName());
                }
            }
        }
        
        model.addAttribute("files", fileNames);
        return "files"; // Asegúrate de que esta vista existe en templates
    }
}
