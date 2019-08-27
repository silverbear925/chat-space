# README

##userテーブル

|Column|Type|Options|
|------|----|-------|
|username|sting|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|

###Association

has_many :uers_groups
has_many :group, throuth: :users_groups

##groupテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|text|null: false, foreign_key: true|
|username|string|null: false, foreign_key: true|
|member|text|null: false, foreign_key: true|

###Association

has_many :uers_groups
has_many :user, throuth: :users_groups

##users_groupテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association
belongs_to :user
belongs_to :group

##commentテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association

belongs_to :user
belongs_to :group

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

