package com.soy.board.api.validation;

import com.soy.board.api.dto.BoardDto;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;

@Service
public class BoardValidation {
    public void validate(BoardDto boardDto, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "title", "", "제목을 입력해주세요.");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "contents", "", "내용을 입력해주세요.");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "writer", "", "작성자를 입력해주세요.");
    }
}
