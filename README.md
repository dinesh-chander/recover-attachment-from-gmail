# recover-attachment-from-gmail

### How to recover?

1. Go to your inbox and to the mail from which you want to recover your attachment.
2. Now on the right hand side, click the `More` button. In the dropdown select `Show Original` option.

![show_original_flow](https://raw.githubusercontent.com/dinesh-chander/recover-attachment-from-gmail/master/readme_images/show_original.png)

3. It will take you to a new page. On this page select `Download Original`. This will download a text file on your system.
4. Open this file in any text editor and then search for `Content-Disposition: attachment;`. Also make sure that `Content-Transfer-Encoding: base64` is there with `Content-Disposition: attachment`, since this program only works with `base64` encoding yet.
5. Below `Content-Disposition: attachment;` you will find a big chunk of random characters. Copy this chunk in a new file ( let's say attachment_base64.txt).

![copy_base64](https://raw.githubusercontent.com/dinesh-chander/recover-attachment-from-gmail/master/readme_images/copy_base64.png)

6. Now run : 
  `node recover.js attachment_base64.txt outputfileName.extension`
7. Make sure the extension of output file is correct, otherwise the attachment won't recover properly.
