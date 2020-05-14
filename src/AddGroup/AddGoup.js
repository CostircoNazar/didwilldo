import React, { useState } from "react";
import ColorPanel from "../ColorPanel/ColorPanel";
import { COLOR_LIST } from "../appConfig";
import { getCurrentDate } from "../utils";
import "./styles.css";

function AddGroup({ addNewGroup, nextGroupId }) {
   const [color, setColor] = useState("white");
   const [title, setTitle] = useState("");

   const randomColor = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];

   const createNewGroup = (e) => {
      if (title.length > 0) {
         const newGroup = {
            id: nextGroupId,
            color: color === "white" ? randomColor : color,
            title: title,
            created: getCurrentDate(),
            todoList: [],
         };

         addNewGroup(newGroup);
         setColor("white");
         setTitle("");
      }

      e.preventDefault();
   };

   return (
      <div className="addGroup">
         <span>Add new group</span>

         <div className="addGroupHeader">
            <div className="addGroupTitle">
               <input
                  type="text"
                  name="groupTitle"
                  placeholder="Group title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>

            <div className="addGroupColorPanel">
               <ColorPanel setColor={setColor} />
            </div>

            <div className="createGroupButton">
               <button name="submitNewGroup" onClick={createNewGroup}>
                  Create
               </button>
            </div>
         </div>
      </div>
   );
}

export default AddGroup;