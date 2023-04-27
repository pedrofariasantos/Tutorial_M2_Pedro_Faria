CREATE TABLE user ( 
	"user key"           INTEGER NOT NULL  PRIMARY KEY  ,
	Nome                 TEXT     
 );

CREATE TABLE Experiencia ( 
	"User key"           INTEGER     ,
	Empresa              TEXT     ,
	Cargo                TEXT     ,
	Data                 TEXT     ,
	FOREIGN KEY ( "User key" ) REFERENCES user( "user key" )  
 );

CREATE TABLE Formaçao ( 
	"user key"           INTEGER     ,
	Curso                TEXT     ,
	Data                 TEXT     ,
	FOREIGN KEY ( "user key" ) REFERENCES user( "user key" )  
 );

CREATE TABLE Realizações ( 
	"user key"           INTEGER     ,
	Realizações          TEXT     ,
	"Data:"              TEXT     ,
	FOREIGN KEY ( "user key" ) REFERENCES user( "user key" )  
 );

CREATE TABLE "Sobre mim" ( 
	Número               NUMERIC     ,
	User_key             BIGINT     ,
	email                CHAR(20)     ,
	endereço             CHAR(20)     ,
	FOREIGN KEY ( User_key ) REFERENCES user( "user key" )  
 );
