import "./styles.css";
import $ from "jquery";

$(function () {
  $(document).off("click");

  $(".area-input").on("click", ".btn-add", () => {
    const text = $("input#text").val();
    if (text !== "") {
      $("input#text").val("");
      todoCreate(text);
    }
  });

  $(".area-todo .list").on("click", ".btn-finish", (e) => {
    const text = $(e.target).parent().find("span").text();
    todoFinish(text);
    $(e.target).parent().remove();
  });

  $(".area-todo .list").on("click", ".btn-delete", (e) => {
    $(e.target).parent().remove();
  });

  $(".area-finish .list").on("click", ".btn-restore", (e) => {
    const text = $(e.target).parent().find("span").text();
    todoCreate(text);
    $(e.target).parent().remove();
  });
});

const todoCreate = (text) => {
  $(".area-todo ul.list").append(
    `<li><span>${text}</span>` +
      "<button class='btn-finish'>finish</button>" +
      "<button class='btn-delete'>deelete</button>" +
      "</li>"
  );
};
const todoFinish = (text) => {
  $(".area-finish ul.list").append(
    `<li><span>${text}</span>` +
      "<button class='btn-restore'>restore</button>" +
      "</li>"
  );
};
