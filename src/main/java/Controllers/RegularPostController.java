package main.java.Controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import main.java.DAO.DBGeneric;
import main.java.Models.Bill;
import main.java.Models.Coffee;
import main.java.Models.RegularPost;
import main.java.Utils.ResponseFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api")
@EnableAutoConfiguration
public class RegularPostController {
    DBGeneric<RegularPost> repo = new DBGeneric<>();

    private RegularPost regularPost = new RegularPost();

    @RequestMapping(value = "/regularPostList")
    public ResponseEntity<List<RegularPost>> upload() {
        List regularPostList;
        try {
            regularPostList = repo.getAll(regularPost);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(regularPostList);
    }
    @RequestMapping(value = "/addRegularPost")
    public ResponseEntity<String> addRegularPost(Integer daysNumber,
                                                String endTime,
                                                String startTime) {

            RegularPost regularPost = new RegularPost();
            regularPost.setDaysNumber(daysNumber.intValue());
            regularPost.setEndTime(endTime);
            regularPost.setStartTime(startTime);
       try {
           repo.create(regularPost);
       } catch (Exception ex) {
          ex.printStackTrace();
           return  ResponseFactory.ResponseError("Failed", "Cannot add regular post");
       }
        return ResponseEntity.ok().header("Success").build();
    }
    @RequestMapping(value = "/detailsRegularPost")
    public ResponseEntity<RegularPost> getRegularById(Long id) {
        RegularPost postDetails= null;
        try {
            postDetails=repo.getById(id,regularPost);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot find regular Post");
        }
        return ResponseEntity.ok(postDetails);
    }
    @RequestMapping(value = "/deleteRegularPost")
    public ResponseEntity<List<RegularPost>> deleteRegularPost(Long id) {
        List list;
        try {
            repo.delete(id,regularPost);
            list = repo.getAll(regularPost);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot delete RegularPost");
        }
        return ResponseEntity.ok(list);
    }

    @RequestMapping(value = "/updateRegularPost", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<RegularPost> updateRegularPost(@RequestBody RegularPost regularPost1) {
        try {
            repo.update(regularPost1);
            regularPost1=repo.getById(regularPost1.getId(), regularPost1);
        } catch (Exception ex) {
            return ResponseFactory.ResponseError("Failed", "Cannot update RegularPost");
        }
        return ResponseEntity.ok(regularPost1);
    }
}
