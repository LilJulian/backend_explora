#Tablas relacionadas con los usuarios y sus capacidades

CREATE TABLE permisos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(100),
    descripcion VARCHAR(255)
);

drop table permisos;

CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

drop table roles;

CREATE TABLE permisos_roles(
	id int auto_increment primary key,
	id_rol int,
    id_permiso int,    
    FOREIGN KEY (id_rol) REFERENCES roles(id),
    FOREIGN KEY (id_permiso) REFERENCES permisos(id)
);

drop table permisos_roles;

CREATE TABLE usuarios (
	id int auto_increment primary key,
    nombre varchar(50) not null,
    correo varchar(50) not null,
    telefono varchar(10),
    contrasena varchar(255),
    rol int not null,
    foreign key (rol) references roles(id)
);

set foreign_key_checks = 0;
set foreign_key_checks = 1;

drop table usuarios;

#Tabla para verificar estados(activos o inactivos)

create table estados ( #(activo, inactivo / (true, false)
	id int auto_increment primary key,
    estado boolean default true
);

drop table estados;

# Tablas para crear un viaje

CREATE TABLE tipo_transportes ( #(terrestre, aereo, acuatico)
	id int auto_increment primary key,
    nombre varchar(50) not null
);

drop table tipo_transportes;

CREATE TABLE transportes (
	id int auto_increment primary key,
    nombre varchar(50) not null,
    matricula varchar(8),
    asientos_totales int,
    descripcion text,
    estado int not null,
    tipo_transporte int not null,
    foreign key (estado) references estados(id),
    foreign key (tipo_transporte) references tipo_transportes(id)
);

drop table transportes;

create table paises(
	id int auto_increment primary key,
    nombre varchar(100)
);

drop table paises;

CREATE TABLE ciudades (
	id int auto_increment primary key,
    nombre varchar(100) not null,
    pais int not null,
    foreign key (pais) references paises(id)
);

drop table ciudades;

CREATE TABLE ruta_ciudad (
	id int auto_increment primary key,
    ciudad_origen int not null,
    ciudad_destino int not null,
    foreign key (ciudad_origen) references ciudades(id),
    foreign key (ciudad_destino) references ciudades(id)
);

drop table ruta_ciudad;

#Tabla del viaje

CREATE TABLE viaje (
	id int auto_increment primary key,
    ciudades int not null,
    transporte int not null,
    fecha_salida datetime not null,
    fecha_llegada datetime not null,
    fecha_vuelta datetime,
    precio_unitario decimal (10,2) not null,
    asientos_disponibles int not null,
    foreign key (ciudades) references ruta_ciudad(id),
    foreign key (transporte) references transportes(id)
);

drop table viaje;

#Tablas de reservacion de un cliente

CREATE TABLE tipo_reservas ( #(ida, ida y vuelta)
	id int auto_increment primary key,
    nombre varchar(50)
);

drop table tipo_reservas;

CREATE TABLE estado_reserva ( #(pendiente, confirmada, cancelada)
	id int auto_increment primary key,
    nombre varchar(50)
);

drop table estado_reserva;

CREATE TABLE reservas (
	id int auto_increment primary key,
    usuario int not null,
    viaje int not null,
    tipo_reserva int not null,
    fecha_reserva datetime default current_timestamp not null,
    cantidad_personas int not null,
    precio_total decimal(10,2) not null,
    estado int not null,
    foreign key (usuario) references usuarios(id),
    foreign key (tipo_reserva) references tipo_reservas(id),
    foreign key (estado) references estado_reserva(id),
    foreign key (viaje) references viaje(id)
);

drop table reservas;

CREATE TABLE ticket (
	id int auto_increment primary key,
    reserva int not null,
    nombre varchar(100),
    tipo_documento varchar(30),
    documento varchar(20),
    comentarios text,
    asiento varchar(3),
    foreign key (reserva) references reservas(id)
);

drop table ticket;