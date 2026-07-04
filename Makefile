.PHONY: help install start ios android test lint format clean

help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make start      - Start Metro bundler"
	@echo "  make ios        - Run on iOS simulator"
	@echo "  make android    - Run on Android emulator"
	@echo "  make test       - Run tests"
	@echo "  make lint       - Check code quality"
	@echo "  make format     - Format code"
	@echo "  make clean      - Clean build files"

install:
	npm install
	cd ios && pod install && cd ..

start:
	npm start

ios:
	npm run ios

android:
	npm run android

test:
	npm test

lint:
	npm run lint

format:
	npm run format

clean:
	rm -rf node_modules
	rm -rf ios/Pods
	rm -rf ios/Podfile.lock
	rm -rf android/build
	rm -rf .gradle
