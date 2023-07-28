import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { PostTypes } from '../types';
import { formatCreated } from '../utils';

export const Post: FC<PostTypes> = memo(({ id, content, created }) => {
  const navigate = useNavigate();
  const navTo = () => navigate(`/posts/${id}`);

  return (
    <div className="post">
      <div className="post__top" onClick={navTo}>
        <img
          className="post__top-img"
          src="https://pbs.twimg.com/profile_images/995101525528559618/KlRZGZx4_400x400.jpg"
        />
        <div>
          <h3 className="post__top-title">Шелдон купер</h3>
          <p className="post__top-info">
            Основатель группы • <span className="post__top-info_created">{formatCreated(created)}</span>
          </p>
        </div>
      </div>
      <p className="post__content">{content}</p>
      <div className="post__actions">
        <button className="post__actions-btn" type="button">
          Нравится
        </button>
        <button className="post__actions-btn" type="button">
          Комментировать
        </button>
      </div>
      <div className="post__bottom">
        <img
          className="post__bottom-img"
          src="https://pbs.twimg.com/profile_images/995101525528559618/KlRZGZx4_400x400.jpg"
        />
        <textarea className="post__bottom-textarea" placeholder="Напишите комментарий..."></textarea>
      </div>
    </div>
  );
});
