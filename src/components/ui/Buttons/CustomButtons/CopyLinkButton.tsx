import { FC } from 'react';
import { useCopyToClipboard } from '../../../../utils/Custom Hooks/useCopyToClipboard';
import { CustomButtonLink } from './styles';
import { ReactComponent as Link } from '../../../../assets/icons/Link.svg';

export interface CopyLinkButtonProps {
  link: string;
  width?: number;
  height?: number;
}

export const CopyLinkButton: FC<CopyLinkButtonProps> = ({
  link,
  width = 20,
  height = 20,
}) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleCopyLink = () => {
    copyToClipboard(link);
  };

  return (
    <CustomButtonLink $isCopied={isCopied} onClick={handleCopyLink}>
      <Link width={width} height={height} />
    </CustomButtonLink>
  );
};
