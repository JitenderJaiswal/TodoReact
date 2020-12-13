import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import Checkbox from "@material-ui/core/Checkbox";
import AddIcon from "@material-ui/icons/Add";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";

function TodoList(props) {
  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);
  const [textStrikeOver, setTextStrikeOver] = useState(null);

  const { index, text, deleteTask, editTask, onTaskedit, etask } = props;

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (textStrikeOver == null) setTextStrikeOver("line");
    else setTextStrikeOver(null);
  };
  const editing = () => {
    setEdit(!edit);
  };

  return (
    <div>
      <li className="margin-left" className={textStrikeOver}>
        <div className="margin-left">
          {" "}
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
        {edit ? (
          <div>
            <input
              type="text"
              value={etask}
              placeholder="Edit Tasks"
              onChange={onTaskedit}
            />
            <Button onClick={() => editTask(index)}>
              <AddIcon />
            </Button>
          </div>
        ) : (
          text
        )}
        <div>
          <Button onClick={editing}>
            <EditTwoToneIcon />
          </Button>
          <Button
            onClick={() => {
              deleteTask(index);
            }}
          >
            <DeleteTwoToneIcon />
          </Button>
        </div>
      </li>
    </div>
  );
}

export default TodoList;
