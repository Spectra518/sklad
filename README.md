# sklad
### Описание
*Информационная система склада, осуществляющая автоматизацию управления складом, учёт товара.  
*В соответствии с распоряжением Администрации Ненецкого автономного округа, ГБПОУ НАО «Ненецкий аграрно-экономический техникум имени В.Г. Волкова» осуществляющая информационные функции.
Автоматизируемые фуннкции:
•	Обеспечение информационного процесса;
•	Ввод данных
•	Вывод данных пользователю;
### Технологии
Frontend:HTML CSS JS
Backend:PHP
БД: MySQL
### Наименование системы
Полное наименование системы – Информационная система управления складом. Осуществляющий функции предоставления информационное обеспечение склада, условное обозначение системы – ИС УС 
### Назначение и цели создания ИС УС
Информационная система склада, осуществляющая автоматизацию управления складом, учёт товара.  
Основная цель создания ИС УС – автоматизация управлением склада.
### Краткие сведения об объекте информатизации
В соответствии с распоряжением Администрации Ненецкого автономного округа, ГБПОУ НАО «Ненецкий аграрно-экономический техникум имени В.Г. Волкова» осуществляющая информационные функции.
### Требования к программному обеспечению
Для управления сервером основной и резервной БД компонентов ИС УС должна использоваться надежная, сервера-ориентированная промышленная операционная система, позволяющая обеспечить управление СУБД и другими исполняемыми процессами при максимальной ее загрузке. 
Операционная система должна обеспечивать надежность, безопасность, отказоустойчивость и возможность восстановления при сбоях, производиться ведущим мировым производителем операционных систем. Операционная система серверов БД ИС УС должна поддерживать различные архитектуры процессоров.
Прикладное программное обеспечение в составе ИС УС должно соответствовать следующим основным требованиям:
 • функционировать в среде операционной системы и взаимодействовать с СУБД; 
• поддерживать русский и английский языки, символы кириллицы и латиницы;
• иметь удобный пользовательский интерфейс; 
• реализовывать экспорт данных в текстовом формате; 
• реализовывать формирование и вывод печатных отчетных форм; 
• обеспечивать реализацию всех функций ИС УС в соответствии с настоящим 
• иметь комплект пользовательской документации на русском языке. 
Требования к качеству программных средств, а также к способам обеспечения его контроля
Качество разработки программных средств должно обеспечиваться соответствующими процедурами управления проектом по реализации ИС УС.
### Изображения
Главная страница: ![image](https://github.com/user-attachments/assets/4a5c3429-7b79-42ab-bf40-7a5230bc643c)
Регестрация: ![image](https://github.com/user-attachments/assets/36c984b5-5fd0-4635-9247-e1ce8c19d002)
Меню: ![image](https://github.com/user-attachments/assets/518a505f-be61-4fa2-b260-adb50b1fd353)
Админ панель: ![image](https://github.com/user-attachments/assets/98bb1e77-6243-4d9a-a0a1-d7d9ca9ed3f4)
Управляющий: ![image](https://github.com/user-attachments/assets/ad87e800-af6a-4725-bbc6-50a163d52c82)



#код
header
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>StorageVault</title>
<link rel="stylesheet" href="style.css" />
</head>
<body style="background-color: rgba(151, 188, 190, 0.655);">
<header style="display:flex; align-items:center; padding:10px;">
    <img src="{{ asset('asserts/img/log.png') }}" height="89px" alt="Логотип" />
    <big style="margin-left:10px;"><a href="menu.blade.php">StorageVault</a></big>
    <!-- Иконки -->
    <div style="margin-left:auto; display:flex; gap:15px; align-items:center;">
        <a href="korzina.php"><img src="{{ asset('asserts/img/korzina.png') }}" height="50" width="50" alt="Корзина"></a>
        <a href="profile.php"><img src="{{ asset('asserts/img/user.png') }}" height="50" width="60" alt="Пользователь"></a>
        <a href="{{ route ('log') }}"><div style="background:#fff; padding:5px 10px; border-radius:5px; cursor:pointer;">Выход</div></a>
    </div>
</header>   


web.php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\UserController;


Route::get('/', function () {           
    return view('index');
})->name('index');

Route::get('/log', [UserController::class, 'login'])->name('log');
Route::get('/menu', [UserController::class, 'men'])->name('menu');




UserControler
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(){
        return view('log');
    }
    
    public function men(){
        return view('menu');
    }
}



log.blade.php
@endsection
@section('content')
<?php $hiHeader = true; $hiFooter = true; ?>
<body style="background-color: rgba(151, 188, 190, 0.655);">
    <h2 style="margin: top 3px;">Авторизация</h2> 
<form action='/login' method="POST" style="max-width:300px; height:300px; margin:auto; background-color: grey;">
    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>
    <label>Пароль:</label><br>
    <input type="password" name="password" required><br><br>
    <a><button type="submit" style="left: 2px;">Войти</button></a>
    <button type="submit">1</button>
    <button type="submit">2</button>
    <p></p>
    <button type="submit">Нет аккаунта?</button>
</form>

</body>
@endsection


menu.blade.php
@extends('welcome')
@section('title')
Авторизация
@endsection
@section('content')
<h2>Инвентарь на складе</h2>
<div style="overflow-x:auto;">
<table border="1" style="width:100%; border-collapse: collapse;">
<tr>
    <th>Категория</th>
    <th>Название</th>
    <th>Количество</th>
    <th>Описание</th>
</tr>
<?php while($row = $result->fetch_assoc()): ?>
<tr>
    <td><?= htmlspecialchars($row['category']) ?></td>
    <td><?= htmlspecialchars($row['name']) ?></td>
    <td><?= htmlspecialchars($row['quantity']) ?></td>
    <td><?= htmlspecialchars($row['description']) ?></td>
</tr>
<?php endwhile; ?>
</table>
</div>
<?php include 'footer.php'; ?>

welcom.blade.php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, instial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>@yield('title')</title>

    @yield('css')
</head>
<body>
    @if (!isset($hiHeader) || !$hiHeader)
        @include('header')
    @endif
    @yield('content')
    @if (!isset($hiFooter) || !$hiFooter)
        @include('footer')
    @endif
</body>
</html> 

index.blade.php
@extends('welcome')

@section('title')
склад
@endsection

@section('content')
<form action="search.php" method="get">
    <input type="text" name="query" placeholder="Введите запрос...">
    <button type="submit">Искать</button>
</form>
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<title>Таблица с автоматическим добавлением строк</title>
<style>
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #949494;
    margin-top: 8%
  }
  th, td {
    border: 1px solid black;
    color: black;
    padding: 8px;
    text-align: center;
  }
</style>
</head>
<body>

<table id="myTable">
  <thead>
    <tr>
      <th>КАТЕГОРИЯ</th>
      <th>НАИМЕНОВАНИЯ</th>
      <th>КОЛЛИЧЕСТВО</th>
    </tr>
  </thead>
  <tbody>
    <!-- Строки будут добавляться сюда -->
  </tbody>
</table>

<script>
  // Массив данных для строк (можете заменить на свои данные)
  const data = [
    {category: 'Категория 1', name: 'Наименование 1', quantity: 10},
    {category: 'Категория 2', name: 'Наименование 2', quantity: 20},
    {category: 'Категория 3', name: 'Наименование 3', quantity: 30},
    {category: 'Категория 4', name: 'Наименование 4', quantity: 40},
    {category: 'Категория 5', name: 'Наименование 5', quantity: 50},
    {category: 'Категория 6', name: 'Наименование 6', quantity: 60},
    {category: 'Категория 7', name: 'Наименование 7', quantity: 70}
  ];

  const tbody = document.querySelector('#myTable tbody');

  // Цикл для добавления строк
  data.forEach(item => {
    const row = document.createElement('tr');

    const cellCategory = document.createElement('td');
    cellCategory.textContent = item.category;
    row.appendChild(cellCategory);

    const cellName = document.createElement('td');
    cellName.textContent = item.name;
    row.appendChild(cellName);

    const cellQuantity = document.createElement('td');
    cellQuantity.textContent = item.quantity;
    row.appendChild(cellQuantity);

    tbody.appendChild(row);
  });
</script>

</body>
</html>
@endsection

