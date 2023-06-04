import { useState, useRef } from "react";

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const refList = useRef(new Map());

  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
              refList.current.get(index + 1).scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
              });
            } else {
              setIndex(0);
              refList.current.get(0).scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
              });
            }
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={(node) => {
                if (node) {
                  refList.current.set(i, node);
                } else {
                  refList.current.delete(i);
                }
              }}
            >
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
