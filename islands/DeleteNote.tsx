/** @jsx h */
import { ObjectId } from "https://deno.land/x/mongo@v0.30.1/deps.ts";
import { h } from "preact";
import { tw } from "@twind";

const DeleteSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <path
      fill="#AB7C94"
      d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h4.75a.75.75 0 010 1.5H3.5a1 1 0 100 2h4.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9z"
    >
    </path>
    <path
      fill="#AB7C94"
      d="M11.28 10.22a.75.75 0 10-1.06 1.06L11.94 13l-1.72 1.72a.75.75 0 101.06 1.06L13 14.06l1.72 1.72a.75.75 0 101.06-1.06L14.06 13l1.72-1.72a.75.75 0 10-1.06-1.06L13 11.94l-1.72-1.72z"
    >
    </path>
  </svg>
);

export default function AddNote({ noteId }: { noteId?: ObjectId }) {
  const deleteNote = async () => {
    const inp = confirm("Are you sure you want to delete this note?");
    if (inp) {
      await fetch(`/api/note/delete`, {
        method: "DELETE",
        body: JSON.stringify({ noteId }),
      });
      alert("Deleted");
      location.reload();
    }
  };

  return (
    <button
      type="submit"
      onClick={() => deleteNote()}
    >
      <DeleteSvg />
    </button>
  );
}
