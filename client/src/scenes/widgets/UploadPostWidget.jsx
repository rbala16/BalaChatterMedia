import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
  } from "@mui/icons-material";
  import {
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery,
  } from "@mui/material";
  import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";

const UploadPostWidget ({picturePath})=>{
const dispatch = useDispatch();
const [isImage,setIsTmage] = useState(false);
const [image,setImage] = useState(null);
const [post,setPost] = useState("");
const {palette} = useTheme();
const {_id} = useSelector((state)=> state.user);
const token = useSelector((state) => state.token);
const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
const mediumMain = palette.neutral.mediumMain;
const medium = palette.neutral.medium;

const handlePost = async () => {
  const formData = new FormData();
  formData.append("userId", _id);
  formData.append("description", post);
  if (image) {
    formData.append("picture", image);  //picturre key
    formData.append("picturePath", image.name);
  }

  const response = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  const posts = await response.json();
  dispatch(setPosts({ posts }));
  setImage(null);
  setPost("");
};

}
export default UploadPostWidget;