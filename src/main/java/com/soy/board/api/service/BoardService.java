package com.soy.board.api.service;

import com.soy.board.api.repository.Board;
import com.soy.board.api.repository.BoardRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public List<Board> getBoardList(){
        return boardRepository.findAll();
    }

    public Board getBoard(String id){
        return boardRepository.findById(id).orElseGet(Board::new);
    }

    public boolean isBoardExist(String id) throws Exception {
        Board board = boardRepository.findById(id).orElseThrow(Exception::new);
        return board != null;
    }

    public void insertBoard(Board board){
        boardRepository.save(board);
    }

    public void updateBoard(Board board){
        board.setMod_date(new Date());
        boardRepository.save(board);
    }

    public void deleteBoard(String id) throws Exception {
        if (isBoardExist(id)) boardRepository.deleteById(id);
    }
}
