import React, { useState, useEffect } from 'react';
import './Home.css';

const Post = () => {
  //댓글사용자정보
  const currentUser = {
    profileImage: 'https://via.placeholder.com/50', // 사용자 프로필 사진 URL
    userName: '로그인된사용자', // 사용자 이름
  };

  // 사용자 정보 예시 (임시 데이터)
  const [userData, setUserData] = useState({
    profileImage: 'https://www.palnews.co.kr/news/photo/202010/203411_43193_327.jpg',
    userName: '천재농부',
    postDate: '10월 21일',
    postTitle: '농사 잘하는 법좀 ㅠㅠ',
    postContent: '농사 너무 어렵당 ~ 농사 잘하는 분들 농기구 빌려주세요무 어렵당 ~ 농사 잘하는 분들 농기구 빌려주무 어렵당 ~ 농사 잘하는 분들 농기구 빌려주무 어렵당 ~ 농사 잘하는 분들 농기구 빌려주무 어렵당 ~ 농사 잘하는 분들 농기구 빌려주무 어렵당 ~ 농사 잘하는 분들 농기구 빌려주무 어렵당 ~ 농사 잘하는 분들 농기구 빌려주무 어렵당 ~ 농사 잘하는 분들 농기구 빌려주',
    photos: [
      'https://www.100ssd.co.kr/news/photo/202307/100261_80090_553.jpg',
      'https://mono.aks.ac.kr/s/media/0b/0b49ff76-7228-4c5a-8e64-18138a205933.jpg?preset=page',
      'http://www.jadam.kr/news/photo/200910/5841_7727_3726.jpg',
    ],
    likeCount: 0,
    commentCount: 0,
    
    comments: [
      { id: 1, content: '댓글 내용 1', date: '12월 25일' },
      { id: 2, content: '댓글 내용 2', date: '12월 26일' },
    ],
  });

  //댓글
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString(); // 현재 날짜

    const updatedComments = [
      ...userData.comments,
      {
        id: userData.comments.length + 1,
        userName: currentUser.userName,
        profileImage: currentUser.profileImage,
        content: newComment,
        date: currentDate,
      },
    ];

    setUserData({ ...userData, comments: updatedComments });
    setNewComment('');
  };

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  
  //이미지 모달 창 구현
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="Home">
      <div className="page">
        <div className="postPage">
            {/* 작성자 정보 */}
          <div className="author-info">
            <img src={userData.profileImage} alt="프로필 사진" />
            <div className="author-details">
              <p className="user-name">{userData.userName}</p>
              <p className="post-date">{userData.postDate}</p>
            </div>
          </div>

          {/* 게시글 제목 */}
          <h1>{userData.postTitle}</h1>

          {/* 게시글 내용 */}
          <p>{userData.postContent}</p>

          {/* 사진 일렬로 표시 */}
          <div className="image-gallery">
            {userData.photos.slice(0, 3).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                onClick={() => handleImageClick(photo)}
              />
            ))}
          </div>

          {/* 모달 */}
          {selectedImage && (
            <div className="modal" onClick={handleCloseModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="modal-close" onClick={handleCloseModal}>
                  &times;
                </span>
                <img src={selectedImage} alt="Selected" />
              </div>
            </div>
          )}
          

            {/* 좋아요, 댓글 기능 */}
            <div className="interactions">
              <button>좋아요</button>
              <p>좋아요 수: {userData.likeCount}</p>
              <p>댓글 수: {userData.commentCount}</p>
            </div>
          </div>

          {/* 댓글 섹션 */}
          <div className="commentPage">


      {/* 댓글 목록 */}
      <div className="comments">
        {userData.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src={comment.profileImage} alt={`${comment.userName}의 프로필`} />
            <div className="comment-details">
              <p className="comment-user">{comment.userName}</p>
              <p className="comment-date">{comment.date}</p>
            </div>
            <p className="comment-content">{comment.content}</p>
          </div>
        ))}
        <div className="extra-space" /> {/* 여기에 추가적인 공간을 만듭니다 */}
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <div className="comment-input">
            <textarea
              name="content"
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={handleInputChange}
            />
            <button type="submit">댓글 작성</button>
          </div>
       </form>
      </div>
      </div>
  </div>
  </div>
  );
};

export default Post;
