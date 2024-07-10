"use client";
import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { UseFormSetValue } from "react-hook-form";

interface LakeDescriptionProps {
  setValue: UseFormSetValue<{
    nume_balta: string;
    adresa: string;
    logo: string;
    imagine_coperta: string;
    galerie: string[];
    telefon: string;
    adresa_mail: string;
    nume_administrator: string;
    descriere_regulament: string;
  }>;
}

class LakeDescription extends Component<LakeDescriptionProps> {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState: EditorState) => {
    this.setState({ editorState });
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText();
    this.props.setValue("descriere_regulament", plainText);
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="px-2.5"
        editorClassName="px-2.5"
        placeholder="✏️ Descriere/Regulament"
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}

export default LakeDescription;
