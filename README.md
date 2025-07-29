# 3_String_hensuusenngen
---

# 📘 JavaScriptのString型とstring型の違いについてのサンプルコード

このリポジトリでは、JavaScriptにおける **プリミティブ型の`string`** と **オブジェクト型の`String`** の違いを、簡単なコード例を通して解説しています。

## 🔧 使用技術

- JavaScript (ES6)

## 📄 内容概要

### 1. 文字列の宣言と結合

```javascript
let test1 = "プリミティブ型_string";
const test2 = "Test";
console.log(test1);         // プリミティブ型のstring
console.log(test1 + test2); // 文字列の結合
```

### 2. 文字列のインデックスアクセス

```javascript
console.log(test1[4]); // 指定位置の文字を取得
console.log(test1[6]);
```

### 3. 文字列の長さを取得

```javascript
console.log(test1.length);
console.log(test2.length);
```

### 4. `String`と`string`の違い

```javascript
let strObj = new String("Hello, World!");
console.log(typeof strObj); // "object"

let strPrim = "Hello, World!";
console.log(typeof strPrim); // "string"
```

#### ✅ まとめ

| 型       | 特徴                                       | 用途例                     |
|----------|--------------------------------------------|----------------------------|
| `String` | オブジェクト型。プロパティやメソッドを持つ | 特殊な操作やラップが必要な場合 |
| `string` | プリミティブ型。軽量で効率的               | 一般的な文字列操作に推奨     |

## 📚 推奨事項

通常の文字列操作には、**プリミティブ型の`string`** を使用することをおすすめします。
