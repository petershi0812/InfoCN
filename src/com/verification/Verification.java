package com.verification;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Random;
import com.sun.image.codec.jpeg.ImageFormatException;
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;
 
public class Verification {
	public static String strCode = null;
	public static final char[] CHARS = {'2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'};
	public static Random random = new Random();	
	//��ȡ��λ�����
	public static String getRandomString() {
		StringBuffer buffer = new StringBuffer();
		for (int i = 0;i<4;i++) {
			buffer.append(CHARS[random.nextInt(CHARS.length)]);
		}
		strCode = buffer.toString();
//		System.out.println("4λ�������"+strCode);
		return strCode;
	}	
	//��ȡ�����ɫ
	public static Color getRandomColor() {
		return new Color(random.nextInt(255),random.nextInt(255),random.nextInt(255));
	}	
	//����ĳ��ɫ�ķ�ɫ
	public static Color getReverseColor(Color c) {
		return new Color(255 - c.getRed(), 255 - c.getGreen(), 255 - c.getBlue());
	}	
	//����ͼƬ
	public ByteArrayInputStream createImage() {
		String randomString = getRandomString();//��ȡ����ַ���		
		int width = 80;//����ͼƬ�Ŀ��
		int height = 30;//�߶�		
		Color color = getRandomColor();//��ȡ�����ɫ����Ϊ����ɫ
		Color reverse = getReverseColor(color);//��ȡ��ɫ������ǰ��ɫ		
		//����һ����ɫͼƬ
		BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		Graphics2D g = image.createGraphics();//��ȡ���ƶ���
		g.setFont(new Font("Times New Roman", Font.BOLD, 23));//��������
		
		g.setColor(color);//������ɫ
		
		g.fillRect(0, 0, width, height);//���Ʊ���
		g.setColor(reverse);//������ɫ
		g.drawString(randomString, 5, 23);
		
		//������100��������
		for (int i = 0,n = random.nextInt(100); i < n; i++) {
			g.drawRect(random.nextInt(width), random.nextInt(height), 1, 1);
		}
		
		//������֤��ͼƬ������ʽ
		ByteArrayInputStream bais = convertImageToStream(image);		
		return bais;		
	}
	
	//��BufferedImageת����ByteArrayInputStream
	private static ByteArrayInputStream convertImageToStream(BufferedImage image){
        
        ByteArrayInputStream inputStream = null;
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        JPEGImageEncoder jpeg = JPEGCodec.createJPEGEncoder(bos);
        try {
            jpeg.encode(image);
            byte[] bts = bos.toByteArray();
            inputStream = new ByteArrayInputStream(bts);
        } catch (ImageFormatException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return inputStream;
    }
	
	
	
	
}
