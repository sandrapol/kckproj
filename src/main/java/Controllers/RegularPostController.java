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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<String> addRegularPost(int mDaysnumber,
                                                double mEndTime,
                                                double mStartTime) {
        RegularPost regularPost= new RegularPost();
        regularPost.setDaysNumber(mDaysnumber);
        regularPost.setEndTime(mEndTime);
        regularPost.setStartTime(mStartTime);
        try {
            repo.create(regularPost);
        } catch (Exception ex) {
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
}
