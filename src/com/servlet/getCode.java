package com.servlet;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;
/**
 * ��֤��ͼƬ����Servlet�ֱ࣬�ӵ��ø�Servlet����ʹ��
 * ȡֵ��ʱ�����session.getAttribute("code")�õ����ɵ�ֵ
 */
public class getCode extends HttpServlet {
        private static final long serialVersionUID = 1L;
        private Color getRandColor(int fc, int bc) {// ������Χ��������ɫ
                Random random = new Random();
                if (fc > 255)
                        fc = 255;
                if (fc < 0)
                        fc = 0;
                if (bc > 255)
                        bc = 255;
                if (bc < 0)
                        bc = 0;
                int r = fc + random.nextInt(bc - fc);
                int g = fc + random.nextInt(bc - fc);
                int b = fc + random.nextInt(bc - fc);
                return new Color(r, g, b);
        }
        @Override
        protected void service(HttpServletRequest request,
                        HttpServletResponse response) throws ServletException, IOException {
                // �������
                response.setContentType("image/jpeg");
                int width = 60;
                int height = 20;
                // ���������
                Random r = new Random();
                // ����������Ƴ�ͼ��
                BufferedImage imgbuf = new BufferedImage(width, height,BufferedImage.TYPE_INT_RGB);// ��������ͼ��,40��20��
                Graphics2D g = imgbuf.createGraphics();// ȡ�û���Ļ��ƻ���
                // ��ʼ����
                g.setColor(getRandColor(200, 250));// �趨����ɫ
                g.fillRect(0, 0, width, height);
                // �������155�������ߣ�ʹͼ���е���֤�벻�ױ���������̽�⵽
                g.setColor(getRandColor(160, 200));
                for (int i = 0; i < 155; i++) {
                        int x = r.nextInt(width);
                        int y = r.nextInt(height);
                        int xl = r.nextInt(12);
                        int yl = r.nextInt(12);
                        g.drawLine(x, y, x + xl, y + yl);
                }
                // �������100�����ŵ㣬ʹͼ���е���֤�벻�ױ�������������̽�⵽
                g.setColor(getRandColor(120, 240));
                for (int i = 0; i < 100; i++) {
                        int x = r.nextInt(width);
                        int y = r.nextInt(height);
                        g.drawOval(x, y, 0, 0);
                }
                g.setFont(new Font("Times New Roman", Font.PLAIN, 18));
                String scode = "";
                for (int i = 0; i < 4; i++) {
                        String rand = String.valueOf(r.nextInt(10));
                        scode += rand;
                        g.setColor(new Color(20 + r.nextInt(110), 20 + r.nextInt(110),
                                        20 + r.nextInt(110)));
                        // ���ú�����������ɫ��ͬ����������Ϊ����̫�ӽ�������ֻ��ֱ������
                        g.drawString(rand, 13 * i + 6, 16);
                }
                request.getSession().setAttribute("randomcode", scode);
                //System.out.println("code->"+scode);
                // ���ͼ��
                ServletOutputStream out = response.getOutputStream();// �õ�HTTP����
                // JPEGCodec.createJPEGEncoder(out);ת��
                JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(out);// ����JPEG��ͼ�������
                encoder.encode(imgbuf);
                out.flush();
        }
}