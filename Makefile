NAME=kine-mobile
VERSION=0.0.1


$(NAME):
    wget 'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40soleil-de-feu/Kine-17486888de004a2b83180712eefa8bf9-signed.apk'
clean:
	rm Kine-17486888de004a2b83180712eefa8bf9-signed.apk
fclean: clean

re:clean $(NAME)

all:$(NAME)
	ls