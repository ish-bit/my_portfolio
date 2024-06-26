import React from 'react';
import {
  DownloadOutlined,
  UndoOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';
import './style.css'

const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export const ImageUploader = (props:any) => {

  const {preview, shape, width} = props

  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };

  return (
    <Image
      width={0}
      src={src}
      className={shape ? 'imageUploader' : ""}
      // preview={preview ? {
      //   toolbarRender: (
      //     _,
      //     {
      //       transform: { scale },
      //       actions: {
      //         onFlipY,
      //         onFlipX,
      //         onRotateLeft,
      //         onRotateRight,
      //         onZoomOut,
      //         onZoomIn,
      //         onReset,
      //       },
      //     },
      //   ) => (
      //     <Space size={12} className="toolbar-wrapper">
      //       <DownloadOutlined onClick={onDownload} />
      //       <SwapOutlined rotate={90} onClick={onFlipY} />
      //       <SwapOutlined onClick={onFlipX} />
      //       <RotateLeftOutlined onClick={onRotateLeft} />
      //       <RotateRightOutlined onClick={onRotateRight} />
      //       <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
      //       <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
      //       <UndoOutlined onClick={onReset} />
      //     </Space>
      //   ),
      // }: false}
    />
  );
};
