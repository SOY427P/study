package com.soy.board.api.controller;

import com.soy.board.api.common.ErrorCode;
import com.soy.board.api.common.JsonResult;
import com.soy.board.api.dto.BoardDto;
import com.soy.board.api.repository.Board;
import com.soy.board.api.service.BoardService;
import com.soy.board.api.validation.BoardValidation;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("board/api")
public class BoardRestController {

    @Autowired
    private BoardService boardService;

    @Autowired
    private BoardValidation boardValidation;

    @Autowired
    private JsonResult result;

    @GetMapping("list")
    public List<Board> getBoardList(){
        return boardService.getBoardList();
    }

    @GetMapping("data")
    public Board getBoard(String id){
        return boardService.getBoard(id);
    }

    @PostMapping("write")
    public JSONObject insertBoard(
              @RequestBody BoardDto boardDto
            , BindingResult bindingResult
    ){

        try {
            boardValidation.validate(boardDto, bindingResult);
            if(bindingResult.hasErrors()) throw new Exception();

            Board board = makeBoardEntity(boardDto);
            board.setReg_date(new Date());
            boardService.insertBoard(board);
            
            return result.getData(ErrorCode.SUCCESS_CODE, "게시글이 등록되었습니다.");

        } catch (Exception e){
            // 로그
            return result.getData(ErrorCode.INVALID_PARAMETER);
        }

    }

    @PutMapping("update")
    public JSONObject updateBoard(
              @RequestBody BoardDto boardDto
            , BindingResult bindingResult
    ){

        try {
            boardValidation.validate(boardDto, bindingResult);
            if(bindingResult.hasErrors()) throw new Exception();

            Board board = makeBoardEntity(boardDto);
            board.setId(boardDto.getId());
            boardService.updateBoard(board);

            return result.getData(ErrorCode.SUCCESS_CODE, "업데이트가 완료되었습니다.");

        } catch (Exception e){
            // 로그
            return result.getData(ErrorCode.INVALID_PARAMETER);
        }
    }

    @DeleteMapping("delete")
    public JSONObject deleteBoard(@RequestBody BoardDto boardDto){
        try {
            boardService.deleteBoard(boardDto.getId());
            return result.getData(ErrorCode.SUCCESS_CODE, "게시글이 삭제되었습니다.");

        } catch (Exception e){
            // 로그
            return result.getData(ErrorCode.INVALID_PARAMETER);
        }
    }

    private Board makeBoardEntity(BoardDto boardDto){
        Board board = new Board();
        board.setTitle(boardDto.getTitle());
        board.setContents(boardDto.getContents());
        board.setWriter(boardDto.getWriter());
        return board;
    }
}
