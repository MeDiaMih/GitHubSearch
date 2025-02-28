import { FC } from 'react';
import { FavoriteButtonProps } from '../../../../types';
import { useAddToFavorites } from '../../../../utils/Custom Hooks/useAddToFavorites';
import { CustomButton } from './styles';
import { ReactComponent as FavoriteOutline } from '../../../../assets/icons/FavoriteOutline.svg';
import { ReactComponent as FavoriteOutlineRed } from '../../../../assets/icons/FavoriteOutlineRed.svg';
import { observer } from 'mobx-react-lite';

export const FavoriteButton: FC<FavoriteButtonProps> = observer(
  ({ repo, width = 20, height = 17 }) => {
    const { handleAddToFavorites, isRepoFavorite } = useAddToFavorites(repo);

    return (
      <CustomButton onClick={handleAddToFavorites}>
        {isRepoFavorite ? (
          <FavoriteOutlineRed width={width} height={height} />
        ) : (
          <FavoriteOutline width={width} height={height} />
        )}
      </CustomButton>
    );
  },
);
